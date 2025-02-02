import app from './app';
import { createElement, render, Fragment,safeHTML } from './vdom';
import { Component } from './component';
import { VNode, View, Action, Update, EventOptions, ActionOptions, MountOptions, AppStartOptions } from './types';
import { on, update, customElement } from './decorator';
import webComponent, { CustomElementOptions } from './web-component';
import { Route, route, ROUTER_EVENT, ROUTER_404_EVENT } from './router';

export interface IApp {
  start<T, E = any>(element?: Element | string, model?: T, view?: View<T>, update?: Update<T, E>,
    options?: AppStartOptions<T>): Component<T, E>;
  on(name: string, fn: (...args: any[]) => void, options?: any): void;
  off(name: string, fn: (...args: any[]) => void): void;
  run(name: string, ...args: any[]): number;
  h(tag: string | Function, props, ...children): VNode | VNode[];
  createElement(tag: string | Function, props, ...children): VNode | VNode[];
  render(element: Element | string, node: VNode): void;
  Fragment(props, ...children): any[];
  route?: Route;
  webComponent(name: string, componentClass, options?: CustomElementOptions): void;
  safeHTML(html: string): any[];
}

app.h = app.createElement = createElement;
app.render = render;
app.Fragment = Fragment;
app.webComponent = webComponent;
app.safeHTML = safeHTML;

app.start = <T, E = any>(element?: Element | string, model?: T, view?: View<T>, update?: Update<T, E>,
  options?: AppStartOptions<T>): Component<T, E> => {
  const opts = { render: true, global_event: true, ...options };
  const component = new Component<T, E>(model, view, update);
  if (options && options.rendered) component.rendered = options.rendered;
  component.mount(element, opts);
  return component;
};

const NOOP = _ => {/* Intentionally empty */ }
app.on('$', NOOP);
app.on('debug', _ => NOOP);
app.on(ROUTER_EVENT, NOOP);
app.on('#', NOOP);
app['route'] = route;
app.on('route', url => app['route'] && app['route'](url));

if (typeof document === 'object') {
  document.addEventListener("DOMContentLoaded", () => {
    if (app['route'] === route) {
      window.onpopstate = () => route(location.hash);
      if (!document.body.hasAttribute('apprun-no-init')) route(location.hash);
    }
  });
}
export type StatelessComponent<T = {}> = (args: T) => string | VNode | void;
export { app, Component, View, Action, Update, on, update, EventOptions, ActionOptions, MountOptions, Fragment, safeHTML }
export { update as event };
export { ROUTER_EVENT, ROUTER_404_EVENT };
export { customElement, CustomElementOptions, AppStartOptions };
export default app as IApp;

if (typeof window === 'object') {
  window['Component'] = Component;
  window['React'] = app;
  window['on'] = on;
  window['customElement'] = customElement;
  window['safeHTML'] = safeHTML;
}


