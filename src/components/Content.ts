import Common from '../common';

export default class Content {
    private common : Common;

    public constructor() {
        this.common = new Common();

        this.renderContent();
        this.init();
    }

    private init() {}

    private renderContent() {}
 }