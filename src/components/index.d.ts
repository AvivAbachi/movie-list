import { HTMLAttributes, ReactNode, FC, NamedExoticComponent, ChangeEvent } from 'react';

export interface BtnProps extends HTMLAttributes<HTMLElement> {
	color?: 'red' | 'purple' | 'green';
	large?: boolean;
	disabled?: boolean;
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
interface NavBarProps {
	children: React.ReactNode;
	title?: React.ReactText;
	whitLocation?: boolean;
	prefixLocation?: string;
}
export interface NavBtnProps {
	to?: string;
	label?: string;
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
