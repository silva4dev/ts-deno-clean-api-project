import { Entity } from '@/src/@shared/entities/entity.ts'
import { UniqueEntityID } from '@/src/@shared/entities/unique-entity-id.ts'
import { Optional } from '@/src/@shared/types/optional.ts'

export interface PlantProps {
	name: string
	type: string
	description: string
	careInstructions: string[]
	createdAt: Date
	updatedAt?: Date
}

export class Plant extends Entity<PlantProps> {
	public get name() {
		return this.props.name
	}

	public get type() {
		return this.props.type
	}

	public get description() {
		return this.props.description
	}

	public get careInstructions() {
		return this.props.careInstructions
	}

	public get createdAt() {
		return this.props.createdAt
	}

	public get updatedAt() {
		return this.props.updatedAt
	}

	public static create(
		props: Optional<PlantProps, 'createdAt'>,
		id?: UniqueEntityID,
	) {
		const plant = new Plant({
			...props,
			createdAt: new Date(),
		}, id)

		return plant
	}
}
