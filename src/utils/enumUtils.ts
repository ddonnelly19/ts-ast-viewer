import { partition } from "./arrayUtils.js";

type EnumLike = Record<string, string | number>;
type NumericEnumName<T extends EnumLike> = Extract<
	{ [K in keyof T]-?: T[K] extends number ? K : never }[keyof T],
	string
>;


export function getNames<T extends EnumLike>(e: T): NumericEnumName<T>[] {
	return Object.keys(e)
		.filter((k): k is NumericEnumName<T> => typeof (e as Record<string, unknown>)[k] === "number");
}

export function getValues<T extends EnumLike>(e: T) {
	return Object.keys(e)
		.map((k) => (e as Record<string, unknown>)[k])
		.filter((v) => typeof v === "number");
}

export function getNamesForValues<T extends EnumLike>(e: T) {

	const values: { [key: string]: NumericEnumName<T>[] } = getNames(e)
		.reduce((state, name) => {
			const value = `${e[name]}`
			if (!state[value])
				state[value] = [];

			state[value].push(name)
			return state;
		}, {} as any)

	return Object.keys(values).map((key) => ({
		value: parseInt(key, 10),
		names: values[key],
	}));
}

export function getEnumFlagLines<T extends EnumLike>(enumObj: T, value: number) {
	const _names = getNamesForValues(enumObj).filter((entry) => entry.value & value);
	if (_names.length === 0) {
		return null;
	}

	const [powersOfTwo, others] = partition(_names, ({ value }) => Number.isInteger(Math.log2(value)));

	return [...powersOfTwo, ...others].flatMap(({ value, names }) => {
		const power = Math.log2(value);
		return names.map(name => (Number.isInteger(power)  ? `${String(name)} (2 ^ ${power})` as const : String(name)));
	});
}
