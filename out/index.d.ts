import { DefaultOptions } from './lib/models';
declare class StyleGyverPlugin {
    options: DefaultOptions;
    styleguide: {};
    constructor(options: DefaultOptions);
    apply(compiler: any): void;
    buildStyleguide(): void;
}
export = StyleGyverPlugin;
