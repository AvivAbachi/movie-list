import { HTMLAttributes, ReactNode, FC, NamedExoticComponent, ChangeEvent, SVGProps } from 'react';

export interface BtnProps extends HTMLAttributes<HTMLElement> {
	color?: 'red' | 'purple' | 'green';
	lg?: boolean;
	disabled?: boolean;
}
export interface BtnFetchProps {
	onClick?: Function;
	status?: 'FETCH' | 'ERROR' | 'SUCCESS';
}
export interface CardProps {
	movie: MovieT;
	onLike?: () => void;
	onQueue?: () => void;
}

export interface ListProps {
	Card: FC<CardProps> | NamedExoticComponent<CardProps>;
	items?: MoviesT;
}

export interface LogoLinkProp {
	title?: string;
	className?: string;
	titleClassName?: string;
	to?: string;
	alt?: string;
	img?: string;
	Icon?: FC<SVGProps<SVGSVGElement>>;
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
}

export interface PageProps {
	className?: string;
	children?: ReactNode;
}
export interface RadioProps {
	id?: string;
	changed?: (event: ChangeEvent<HTMLInputElement>) => void;
	value?: string | number;
	isSelected?: boolean;
	label?: string;
}
