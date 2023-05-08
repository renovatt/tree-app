import { Dispatch, SetStateAction } from "react";

export type LogoutModalProps = {
    setLogoutModal: Dispatch<SetStateAction<boolean>>;
}

export type NavbarStyleProps = {
    active: boolean;
}

export type DeleteModalProps = {
    id: string;
    setDeleteModal: Dispatch<SetStateAction<boolean>>;
}

export type TransactionModalProps = {
    setTransactionModal: Dispatch<SetStateAction<boolean>>;
}

export type PrivateRouterProps = {
    children: JSX.Element;
}

export type TransactionProps = {
    // userUid?: string;
    id: string;
    resume: string;
    amount: number;
    expense: boolean;
    date: Date;
}

export type DataTransactionProps = TransactionProps[];

export type MontlyExpensesProps = {
    id: string;
    resume: string;
    amount: number;
    date: Date;
}

export type DataMontlyExpensesProps = MontlyExpensesProps[];

export type PriorityListProps = {
    id: string;
    resume: string;
    level: string;
    date: Date;
}

export type DataPriorityListProps = PriorityListProps[];

export type ItemTransactionListProps = {
    id: string;
    resume: string;
    amount: number;
    date: Date;
    svg?: SVGElement | any;
    color: string;
}

export type ItemPriorityListProps = {
    id: string;
    resume: string;
    svg?: SVGElement | any;
    color: string;
}

export type ItemMonthyExpenseListProps = {
    id: string;
    resume: string;
    amount: number;
}

export type UserProps = {
    uid: string;
    displayName: string | null;
    email: string;
    accessToken: string;
    photoURL: string | null;
}

export type MonthObjectChartJsProps = {
    id: string;
    expense: boolean;
    amount: number;
    date: string;
}

export type DataMonthObjectChartJsProps = MonthObjectChartJsProps[]

export type TotalsEachMonthChartJsProps = {
    month: string;
    amount: unknown;
}

export type DataTotalsEachMonthChartJsProps = TotalsEachMonthChartJsProps[]

// export type ChartJsProps = {
//     labels: string[];
//     datasets: {
//         label: string;
//         backgroundColor: string[];
//         indexAxis?: string;
//         data: number[];
//         borderWidth: number;
//     }[]
// }

export type ChartDataset = {
    label: string;
    backgroundColor: string[];
    data: number[];
    borderWidth: number;
    indexAxis?: 'x' | 'y';
};

export type ChartJsStateProps = {
    labels: string[];
    datasets: ChartDataset[];
}