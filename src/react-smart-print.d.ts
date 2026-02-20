import { CSSProperties, ReactNode, FC, RefObject } from 'react';

declare module 'react-smart-print' {
    export interface PaperSizeObject {
        width: number;
        height: number;
    }

    export type PaperSize = "a4" | "letter" | "legal";
    export type PaperOrientation = "portrait" | "landscape";
    export type PaperMargin = "normal" | "narrow" | "wide";

    export interface PaperMarginObject {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    export interface PaperOptions {
        paperSize: PaperSizeObject | PaperSize;
        margin?: PaperMarginObject | PaperMargin;
        orientation?: PaperOrientation;
        paragraphSpacing?: number;
    }

    export interface PageRenderProps {
        children: ReactNode;
        paperOptions: PaperOptions;
        cover?: () => JSX.Element;
        header?: (pageIndex: number, totalPages: number) => JSX.Element;
        footer?: (pageIndex: number, totalPages: number) => JSX.Element;
        contentRef: RefObject<HTMLDivElement>;
        renderContent?: boolean;
        handleLoading: (state: boolean) => void;
        handleRenderContent: (state: boolean) => void;
    }

    export const PageRender: FC<PageRenderProps>;

    export interface TypographyProps {
        children: ReactNode;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        color?: string;
        highlight?: string;
        align?: "left" | "center" | "right" | "justify";
        marginTop?: number;
        marginBottom?: number;
        marginRight?: number;
        marginLeft?: number;
    }

    export const Typography: FC<TypographyProps>;

    export interface ParagraphProps {
        children: ReactNode;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        color?: string;
        highlight?: string;
        lineSpacing?: number;
        align?: "left" | "center" | "right" | "justify";
        marginTop?: number;
        marginBottom?: number;
        marginRight?: number;
        marginLeft?: number;
    }

    export const Paragraph: FC<ParagraphProps>;

    export interface ImageProps {
        src: string;
        alt?: string;
        width?: number | string;
        height?: number | string;
        maxWidth?: number | string;
        maxHeight?: number | string;
        fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        repeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
        align?: "left" | "center" | "right";
        marginTop?: number;
        marginBottom?: number;
        borderRadius?: number;
        opacity?: number;
        style?: CSSProperties;
        className?: string;
        loading?: "eager" | "lazy";
        crossOrigin?: "anonymous" | "use-credentials";
        onLoad?: () => void;
        onError?: () => void;
    }

    export const Image: FC<ImageProps>;

    export const PageBreak: FC;
    export const BlankPage: FC;
    export const Divider: FC<{ width?: string; height?: string; color?: string; marginTop?: string; marginBottom?: string }>;

    export interface SmartPrintHook {
        config: {
            contentRef: RefObject<HTMLDivElement>;
            renderContent: boolean;
            handleLoading: (state: boolean) => void;
            handleRenderContent: (state: boolean) => void;
        };
        isLoading: boolean;
        isRendered: boolean;
        isError: boolean;
        render: () => Promise<void>;
        unmount: () => void;
        print: () => void;
        renderAndPrint: () => Promise<void>;
    }

    export function useSmartPrint(fileName: string): SmartPrintHook;
}
