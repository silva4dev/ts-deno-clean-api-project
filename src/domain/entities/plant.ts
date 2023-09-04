import { Optional } from "../../domain/helpers/types/optional.ts";
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
  public get name() {
    return this.props.name;
  }

  public get type() {
    return this.props.type;
  }

  public get description() {
    return this.props.description;
  }

  public get careInstructions() {
    return this.props.careInstructions;
  }

  public get imageUrl() {
    return this.props.imageUrl;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public static create(
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
