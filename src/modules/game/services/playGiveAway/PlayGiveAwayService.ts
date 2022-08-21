interface response {
  playGiveAway: number;
}

export default class PlayGiveAwayService {
  constructor() {}

  public async execute(): Promise<response> {
    const givenAway = [1, 2, 3, 4, 5, 6];

    let playGiveAway = givenAway.sort(() => Math.random() - 0.5)[0];

    return { playGiveAway };
  }
}
