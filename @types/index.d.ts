type PickKeys<T, V> = Extract<keyof PickType<T, V>, keyof T>;
/**
 * From T, pick a set of properties whose values extend V
 */
type PickType<T, V> = {
	[P in keyof T as T[P] extends NonNullable<V> ? P : never]: Extract<T[P], NonNullable<V>>;
};

interface ObjectConstructor {
	keys<T extends object>(o: T): Extract<keyof T, string>[] 
}

type ReverseRecord<T extends Record<string | number, string | number>> = {
	[P in keyof T as `${T[P]}`]: P;
};

type ReverseRecordArray<T, K extends string | number = Extract<keyof T, string | number>, V extends string | number = Extract<T[Extract<K, keyof T>], string | number>> = {
	[P in Extract<K, keyof T> as `${Extract<T[P], V>}`]: Extract<P, V>[];
};

type ToNumber<T> =  T  extends NumberLike<infer R extends number> ? R : never

type NumberString<N extends number = number> = `${N}`;

type NumberLike<N extends number = number> = N | NumberString<N>;

declare function parseInt(value: any): typeof value extends NumberLike<infer R> ? R : typeof NaN;

interface StringConstructor {
	<T extends string | number | boolean>(value: T): `${T}`;
}