import { TestBed } from '@angular/core/testing';

import { SurveyService } from './new-survey.service';

describe('NewSurveyService', () => {
  let service: SurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
