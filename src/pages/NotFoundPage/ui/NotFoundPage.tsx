import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
