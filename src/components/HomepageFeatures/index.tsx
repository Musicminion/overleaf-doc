import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '简单易用',
        Svg: require('@site/static/img/click-svgrepo-com.svg').default,
        description: (
            <>
                提供Win、Mac、Linux平台的详细的部署方案<br/>
                即便您没有任何运维经验，按照教程也能成功搭建
            </>
        ),
    },
    {
        title: '清晰易读',
        Svg: require('@site/static/img/translate-language-svgrepo-com.svg').default,
        description: (
            <>
                汉化官方Latex的所有教程<br/>
                即便您没有任何Latex经验，也能够快速上手
            </>
        ),
    },
    {
        title: '无微不至',
        Svg: require('@site/static/img/comment-discussion-svgrepo-com.svg').default,
        description: (
            <>
                全天候答疑解惑 <del>弱智问题除外</del><br/>
                有任何问题反馈欢迎前往GitHub提Issue
            </>
        ),
    },
    {
        title: '个人级部署',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                在您的Windows PC或者Mac(含M1/M2系列)上部署仅供您自己使用的Overleaf，
                您可以随时的更新Texlive的宏包或安装你需要的字体。
            </>
        ),
    },
    {
        title: '团队级部署',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                为您的团队在公网或者局域网的服务器上部署Overleaf，配置SSL证书、邮件系统和注册服务。
            </>
        ),
    },
    {
        title: '企业级部署',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                支持OAuth2协议的单点登录认证方案<br/>
                （例如Github、Apple等系列的主流单点登录）<br/>
                分布式部署方案稍后推出
            </>
        ),
    }
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
