export class UniqueEntityID {
	private value: string

	public toString() {
		return this.value
	}

	public toValue() {
		return this.value
	}

	constructor(value?: string) {
		this.value = value ?? crypto.randomUUID()
	}
}
