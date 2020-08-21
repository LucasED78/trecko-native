export class Order {
  code: string;
  type?: string;
  tracks: Array<OrderTracks>

  constructor(code: string, tracks: Array<OrderTracks>, type?: string) {
    this.code = code;
    this.type = type;
    this.tracks = tracks;
  }
}

export class OrderTracks {
  locale: string;
  status: string;
  observation?: string;
  trackedAt: string;

  constructor(locale: string, status: string, trackedAt: string, observation?: string) {
    this.locale = locale;
    this.status = status;
    this.trackedAt = trackedAt;
    this.observation = observation;
  }
}