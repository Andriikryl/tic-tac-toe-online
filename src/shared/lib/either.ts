export type Left<E> = {
    type: 'left',
    error: E
};

export type Right<V> = {
    type: 'right',
    value: V
};

export type Either<E, V> = Left<E> | Right<V>;

export const left = <E>(error: E): Left<E> => ({
    type: "left",
    error
});

export const right = <V>(value: V): Right<V> => ({
    type: "right",
    value
});

export const mapEither = <E, V, V2>(
    either: Either<E, V>,
    fn: (value: V) => V2
): Either<E, V2> => {
    if (either.type === "right") {
        return { type: "right", value: fn(either.value) };
    }
    return either;
};
