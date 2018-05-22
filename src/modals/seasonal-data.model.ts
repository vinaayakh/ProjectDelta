export class seasonalDataModel {
    // airing_start: String;
    // episodes: Number;
    // genre: Array<any>
    // image_url: String
    // kids: Boolean;
    // licensor: Array<String>
    // mal_id: Number;
    // members: Number;
    // producer: Array<any>;
    // r18_plus: Boolean;
    // score: Number;
    // source: String;
    // synopsis: String;
    // title: String;
    // url: String;

    constructor(
        public airing_start: String = '',
        public episodes: Number = 0,
        public genre: Array<any> = [],
        public image_url: String = '',
        public kids: Boolean = false,
        public licensor: Array<String> = [],
        public members: Number = 0,
        public producer: Array<any> = [],
        public r18_plus: Boolean = false,
        public score: Number = 0,
        public source: String = '',
        public synopsis: String = '',
        public title: String = '',
        public url: String = ''
    ) { }
}