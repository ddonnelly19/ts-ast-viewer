import { partition } from "./arrayUtils";

declare function parseInt<T>(value: T, radix?: 10): ToNumber<T>

export type PickType<T, V> = {
	[P in keyof T as T[P] extends NonNullable<V> ? P : never]: Extract<T[P], NonNullable<V>>;
};

export type PickKeys<T, V> = Extract<keyof PickType<T, V>, keyof T>

export type ToNumber<T> = T extends number ? T : T extends `${infer R extends number}` ? R : never;

export function getNames<T>(e: T) {
	return Object.keys(e)
		.filter((k) => typeof e[k] === "number") as PickKeys<T, number>[];
}

export function getValues<T>(e: T) {
	return Object.keys(e)
		.map((k) => e[k])
		.filter((v) => typeof v === "number") as Extract<T[keyof T], number>[];
}

export function getNamesForValues<T>(e: T): ReadonlyArray<{ [P in keyof T]: {
	value: ToNumber<`${Extract<T[P], number>}`>,
	names: [`${PickKeys<T, T[P]>}`]
} }[keyof T]> {
	const values: { [P in Extract<T[keyof T], number> as `${P}`]: [`${PickKeys<T, P>}`]; } = {};

	for (const name of getNames(e)) {
		const value = `${e[name as keyof T]}` as keyof typeof values;
		if (!values[value]) {
			values[value] = [];
		}
		values[value].push(name);
	}

	return Object.keys(values).map((key) => ({
		value: parseInt(key, 10),
		names: values[key],
	}));
}

export function getEnumFlagLines<T>(enumObj: T, value: number) {
	const names = getNamesForValues(enumObj).filter((entry) => entry.value & value);
	if (names.length === 0) {
		return null;
	}

	const [powersOfTwo, others] = partition(names, ({ value }) => Number.isInteger(Math.log2(value)));

	return [...powersOfTwo, ...others].flatMap(({ value, names }) => {
		const power = Math.log2(value);
		return names.map((name) => Number.isInteger(power) ? `${name} (2 ^ ${power})` as const : name);
	});
}
