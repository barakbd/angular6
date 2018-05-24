import { TypeaheadModule } from './typeahead.module';

describe('TypeaheadModule', () => {
  let typeaheadModule: TypeaheadModule;

  beforeEach(() => {
    typeaheadModule = new TypeaheadModule();
  });

  it('should create an instance', () => {
    expect(typeaheadModule).toBeTruthy();
  });
});
