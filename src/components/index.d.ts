import { HTMLAttributes, ReactNode, NamedExoticComponent, ChangeEvent, SVGProps } from 'react';

export interface BtnProps extends HTMLAttributes<HTMLElement> {
	color?: 'red' | 'purple' | 'green';
	lg?: boolean;
	disabled?: boolean;
}

export interface BtnFetchProps extends HTMLAttributes<HTMLElement> {
	status?: 'FETCH' | 'ERROR' | 'SUCCESS';
}

export interface CardProps {
	movie: MovieT;
	onLike?: () => void;
	onQueue?: () => void;
}

export interface ListProps {
	Card: ReactNode<CardProps> | NamedExoticComponent<CardProps>;
	items?: MoviesT;
}

export interface LogoLinkProp {
	title?: string;
	className?: string;
	titleClassName?: string;
	to?: string;
	alt?: string;
	img?: string;
	Icon?: ReactNode<SVGProps<SVGSVGElement>>;
}

interface NavBarProps {
	children: React.ReactNode;
	title?: React.ReactText;
	whitLocation?: boolean;
	prefixLocation?: string;
}

export interface NavBtnProps {
	to?: string;
	label?: string;
	className?: string;
	colors?: 'hooks' | 'mobx' | 'redux';
}

export interface PageProps {
	home?: boolean;
	children?: ReactNode;
}

export interface RadioProps {
	id?: string;
	changed?: (event: ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
	isSelected?: boolean;
	label?: string;
}
