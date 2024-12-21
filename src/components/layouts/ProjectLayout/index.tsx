import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import HighlightedPreBlock from './../../../utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';
import { DynamicComponent } from '../../components-registry';
import ImageBlock from '../../molecules/ImageBlock';
import Link from '../../atoms/Link';
import { Annotated } from '@/components/Annotated';
import { PageComponentProps, ProjectLayout } from '@/types';

type ComponentProps = PageComponentProps &
    ProjectLayout & {
        prevProject?: ProjectLayout;
        nextProject?: ProjectLayout;
    };

const Component: React.FC<ComponentProps> = (props) => {
    const { global, ...page } = props;
    const { title, date, client, description, markdownContent, media, prevProject, nextProject, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');

    return (
        <BaseLayout {...props}>
            <main id="main" className="sb-layout sb-project-layout"></main>
        </BaseLayout>
    );
};
export default Component;
