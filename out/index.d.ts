import { Options } from './lib/models';
declare class StyleGyverPlugin {
    options: Options;
    styleguide: {};
    constructor(options: Options);
    apply(compiler: any): void;
    buildStyleguide(): void;
}
export = StyleGyverPlugin;
