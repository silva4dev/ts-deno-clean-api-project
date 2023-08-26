import { Optional } from "../types/optional.ts";
import { Entity } from "./entity.ts";
import { UniqueEntityID } from "./unique-entity-id.ts";

interface PlantProps {
  name: string;
  type: string;
  description: string;
  careInstructions: string[];
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Plant extends Entity<PlantProps> {
  get name() {
    return this.props.name;
  }

  get type() {
    return this.props.type;
  }

  get description() {
    return this.props.description;
  }

  get careInstructions() {
    return this.props.careInstructions;
  }

  get imageUrl() {
    return this.props.imageUrl;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<PlantProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const plant = new Plant({
      ...props,
      createdAt: new Date(),
    }, id);

    return plant;
  }
}
