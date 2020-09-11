import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'RichTextFieldCustomizerFieldCustomizerStrings';
import styles from './RichTextFieldCustomizerFieldCustomizer.module.scss';

export default class RichTextFieldCustomizerFieldCustomizer extends BaseFieldCustomizer<any> {

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    event.domElement.innerHTML = event.fieldValue;
    event.domElement.classList.add(styles.cell);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    super.onDisposeCell(event);
  }

}
