import { UniqueEntityID } from './unique-entity-id.ts'

export class Entity<Props> {
	private _id: UniqueEntityID
	protected props: Props

	public get id() {
		return this._id
	}

	protected constructor(props: Props, id?: UniqueEntityID) {
		this.props = props
		this._id = id ?? new UniqueEntityID()
	}
}
