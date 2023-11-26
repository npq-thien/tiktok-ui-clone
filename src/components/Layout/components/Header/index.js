import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCircleQuestion,
    faKeyboard,
    faLightbulb,
    faMoon,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../AccountItem';
import Menu from '~/components/Popper/Menu';
import { DownloadIcon, InboxIcon, MessageIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: '/live/creator',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japanese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

console.log(USER_MENU);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 2]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
                    // visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outline className={cx('upload-btn')}>
                                <FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />
                                Upload
                            </Button>

                            <Tippy content="Download app" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <DownloadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('inbox-btn')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* <Button text>Upload</Button> */}
                            <Button outline className={cx('upload-btn')}>
                                <FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />
                                Upload
                            </Button>
                            <Button primary>Log in</Button>

                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="ahttps://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/956d8403484df1acf0ecf71d9dc1d4d5~c5_720x720.jpeg?x-expires=1701151200&x-signature=lrE7uR7XVk3fqQHHJmUKSaM49RE%3D&quot"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
