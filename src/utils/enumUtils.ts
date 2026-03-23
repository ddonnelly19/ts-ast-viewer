import { partition } from "./arrayUtils.js";



export function getNames<T extends object>(e: T): PickKeys<Pick<T, Extract<keyof T, string>>, number>[] {
	return Object.keys(e)
		.filter((k) => typeof (e)[k] === "number") as any;
}

export function getValues<T extends object>(e: T) {
	return Object.keys(e)
		.map((k) => e[k])
		.filter((v) => typeof v === "number");
}

export function getNamesForValues<T extends object>(e: T) {

	const values: {[P in Extract<keyof T, string> as `${Extract<T[P], number>}`]: P[]} = getNames(e)
		.reduce((state, name) => {
			const value = `${e[name]}`
			if (!state[value])
				state[value] = [];

			state[value].push(name)
			return state;
		}, {} as any)

	return Object.keys(values).map((key) => ({
		value: parseInt(key as any, 10) as Extract<T[keyof T], number>,
		names: (values)[key] as Extract<PickKeys<T, number>, string>[],
	}));
}

export function getEnumFlagLines<T extends object>(enumObj: T, value: number) {
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
