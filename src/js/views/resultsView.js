import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsView();
