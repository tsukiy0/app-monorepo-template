import { IdRequest, IdResponse } from "@packages/domain";
import { IIdRepository } from "../boundaries";

export class IdHandler {
  constructor(private readonly idRepository: IIdRepository) {}

  handle = async (request: IdRequest): Promise<IdResponse> => {
    const id = await this.idRepository.get(request.id);

    return {
      id,
    };
  };
}
