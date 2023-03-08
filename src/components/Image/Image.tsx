/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
    src: string,
    className?: string,
    alt?: string,
}
const Image = ({ src, className, alt = '' }: Props) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    let imageSrc = src;
    if (!src.startsWith('http')) {
        imageSrc = `${BASE_URL as string}${src.replace('src/', '')}`;
    }
    return (
        <img loading='lazy' className={className} src={imageSrc} alt={alt} />
    );
};

export default Image;
