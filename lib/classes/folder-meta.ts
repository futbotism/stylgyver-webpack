import { BaseMeta } from './file/base-meta';
import { MenuItem } from '../classes';

export class FolderMeta {

  constructor(
    private menu: MenuItem[],
    private meta: BaseMeta[], // leave untyped for now
  ) {

  }
}
