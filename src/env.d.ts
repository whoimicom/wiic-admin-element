/// <reference types="@rsbuild/core/types" />
import type { AppState } from './stores';
export const BASE_PATH = '/wiic-antd-react';
declare module 'react-redux' {
    export interface DefaultRootState extends AppState {}
}

declare interface ObjectConstructor {
    keys<T>(o: T): (keyof T)[];
}

declare global {
    export type YN = 'Y' | 'N';
}