import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import request from 'utils/request';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import githubData, { getRepos, requestURL } from '../saga';

describe('getRepos saga', () => {
  describe('call api success', () => {
    const generator = getRepos();
    const repos = [];
    it('shoudl call api', () => {
      expect(generator.next().value).toEqual(call(request, requestURL));
    });

    it('should put reposLoaded with res', () => {
      expect(generator.next(repos).value).toEqual(put(reposLoaded(repos)));
    });
  });
  describe('call api failed', () => {
    const generator = getRepos();
    it('should put repoLoadingError when error happen', () => {
      // call api
      generator.next();
      const err = new Error('something happen');
      expect(generator.throw(err).value).toEqual(put(repoLoadingError(err)));
    });
  });
});

describe('githubData watcher', () => {
  const generator = githubData();
  it('should watcher getRepos saga', () => {
    expect(generator.next().value).toEqual(takeLatest(LOAD_REPOS, getRepos));
  });
});
