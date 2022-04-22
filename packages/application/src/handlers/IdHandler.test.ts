import { Id, IdExt } from "@packages/domain";
import { IIdRepository } from "../boundaries";
import { IdHandler } from "./IdHandler";

describe("IdHandler", () => {
  let id: Id;
  let idRepository: IIdRepository;
  let sut: IdHandler;

  beforeEach(() => {
    id = IdExt.rand();

    idRepository = {
      get: jest.fn().mockResolvedValue(id),
    };

    sut = new IdHandler(idRepository);
  });

  it("get id from repository", async () => {
    const actual = await sut.handle({ id: IdExt.rand() });

    expect(idRepository.get).toHaveBeenCalled();
    expect(actual).toEqual({
      id,
    });
  });
});
