import { } from 'jasmine';
import app from '../apprun-zero/index';
import Component from '../apprun-zero/component';

const model = 'x';
const view = _ => '';
const update = {
  hi: (_, val) => val
}

describe('Component', () => {
  it('should trigger update', () => {
    spyOn(update, 'hi');
    const component = new Component(document.body, model, view, update);
    app.run('hi', 'xx');
    expect(update.hi).toHaveBeenCalledWith('x', 'xx');
  });

  it('should trigger view', () => {
    const view = jasmine.createSpy('view');
    const component = new Component(document.body, model, view, update);
    expect(view).toHaveBeenCalledWith('x');
    app.run('hi', 'xx');
    expect(view).toHaveBeenCalledWith('xx');
  });

  it('should track history', () => {
    const view = jasmine.createSpy('view');
    const component = new Component(document.body, model, view, update, {history:true});
    app.run('hi', 'xx');
    app.run('hi', 'xxx');
    app.run('history-prev');
    app.run('history-next');
    expect(view.calls.allArgs()).toEqual([['x'], ['xx'], ['xxx'], ['xx'], ['xxx']]);
  });

  it('should track history with custom event name', () => {
    const view = jasmine.createSpy('view');
    const component = new Component(document.body, model, view, update, {history:{prev:'prev', next:'next'}});
    app.run('hi', 'xx');
    app.run('hi', 'xxx');
    app.run('prev');
    app.run('next');
    expect(view.calls.allArgs()).toEqual([['x'], ['xx'], ['xxx'], ['xx'], ['xxx']]);
  });

  it('should overwrite view', () => {
    const view_spy = jasmine.createSpy('view');
    const view2 = _ => {};
    const view_spy2 = jasmine.createSpy('view2');
    update['hi2'] = _ => {
      return {
        view: view_spy2
      };
    };
    const component = new Component(document.body, {}, view_spy, update);
    app.run('hi2', {});
    expect(view_spy).toHaveBeenCalledTimes(1);
    expect(view_spy2).toHaveBeenCalledTimes(1);
  });

})