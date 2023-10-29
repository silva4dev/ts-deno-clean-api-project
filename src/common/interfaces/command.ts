export interface Command<E, S> {
	execute(input: E): Promise<S>;
}
