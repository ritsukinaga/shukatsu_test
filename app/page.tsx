'use client';

import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white" data-oid="jd5wo-9">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50" data-oid="2.chdc6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="o6rh5-3">
                    <div className="flex justify-between items-center py-4" data-oid="no0srel">
                        <div className="flex items-center" data-oid="c3.gzmq">
                            <h1 className="text-2xl font-bold text-gray-900" data-oid="wbxsrbs">
                                エンタメ就活.com
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="7j_1:3n">
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                data-oid="h.n5:g0"
                            >
                                サービス概要
                            </a>
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                data-oid="37q4n.q"
                            >
                                特徴
                            </a>
                            <a
                                href="#companies"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                data-oid="084p73d"
                            >
                                企業一覧
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                data-oid="x_s1gna"
                            >
                                お問い合わせ
                            </a>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            data-oid="q6qaz-z"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="58-:imy"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="dfyf7q5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4" data-oid="y:.:w5.">
                            <nav className="flex flex-col space-y-2" data-oid="zk2lyrh">
                                <a
                                    href="#about"
                                    className="text-gray-700 hover:text-blue-600 py-2"
                                    data-oid=":x3c_gn"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    サービス概要
                                </a>
                                <a
                                    href="#features"
                                    className="text-gray-700 hover:text-blue-600 py-2"
                                    data-oid="_srz20h"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    特徴
                                </a>
                                <a
                                    href="#companies"
                                    className="text-gray-700 hover:text-blue-600 py-2"
                                    data-oid="csn0ev7"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    企業一覧
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-700 hover:text-blue-600 py-2"
                                    data-oid="ou5yj:r"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    お問い合わせ
                                </a>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative"
                style={{
                    backgroundImage: "url('/images/header-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                data-oid="4hw8ysl"
            >
                <div className="absolute inset-0 bg-black/50 z-0" data-oid="nl1rz6."></div>
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    data-oid="7f29ew4"
                >
                    <div className="text-center" data-oid="o9fzwev">
                        <h2
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            data-oid="xuzy5ur"
                        >
                            エンタメ業界への
                            <br data-oid="e10db::" />
                            <span className="text-blue-300" data-oid="_v3:p90">
                                就職活動を支援
                            </span>
                        </h2>
                        <p className="text-xl text-white mb-8 max-w-3xl mx-auto" data-oid="kghh:3m">
                            映画、音楽、ゲーム、アニメ業界への就職を目指す学生のための専門プラットフォーム。
                            業界のプロフェッショナルがあなたのキャリアをサポートします。
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            data-oid="yf6ujwr"
                        >
                            <button
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                data-oid="nw67ij7"
                            >
                                無料登録する
                            </button>
                            <button
                                className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                                data-oid="tlp6ko6"
                            >
                                サービス詳細
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white" data-oid="lvgqh4q">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="penw_jf">
                    <div className="text-center mb-16" data-oid="vc8r33g">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" data-oid="skl64oy">
                            サービス概要
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-oid=".drejuo">
                            エンタメ就活.comは、エンターテインメント業界に特化した就職活動支援サービスです。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="3tet2:-">
                        <div data-oid="z4m-q:a">
                            <h4
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="q1gscb-"
                            >
                                なぜエンタメ業界なのか？
                            </h4>
                            <ul className="space-y-4 text-gray-600" data-oid="r:1yyjp">
                                <li className="flex items-start" data-oid="y594n9l">
                                    <span className="text-blue-600 mr-3" data-oid="craak1o">
                                        ✓
                                    </span>
                                    創造性を活かせる職場環境
                                </li>
                                <li className="flex items-start" data-oid=":a_kn1x">
                                    <span className="text-blue-600 mr-3" data-oid="m:9iu.o">
                                        ✓
                                    </span>
                                    多様なキャリアパスの選択肢
                                </li>
                                <li className="flex items-start" data-oid=":0n2y1v">
                                    <span className="text-blue-600 mr-3" data-oid="51m-umt">
                                        ✓
                                    </span>
                                    グローバルな市場での活躍機会
                                </li>
                                <li className="flex items-start" data-oid="--.srv1">
                                    <span className="text-blue-600 mr-3" data-oid="u907avj">
                                        ✓
                                    </span>
                                    技術革新の最前線での経験
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-8" data-oid="of6yyvt">
                            <div className="text-center" data-oid="phq-qbi">
                                <div
                                    className="text-4xl font-bold text-blue-600 mb-2"
                                    data-oid="z0kj2jr"
                                >
                                    1000+
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="6sl0c0w">
                                    登録企業数
                                </p>
                                <div
                                    className="text-4xl font-bold text-blue-600 mb-2"
                                    data-oid="zw7rc_g"
                                >
                                    95%
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="21o1hl4">
                                    内定獲得率
                                </p>
                                <div
                                    className="text-4xl font-bold text-blue-600 mb-2"
                                    data-oid="yhc6.sa"
                                >
                                    24h
                                </div>
                                <p className="text-gray-600" data-oid="b60kli_">
                                    平均サポート時間
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50" data-oid="37sf-tb">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="927s8ba">
                    <div className="text-center mb-16" data-oid="d1xjond">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" data-oid="ls7m.88">
                            サービスの特徴
                        </h3>
                        <p className="text-lg text-gray-600" data-oid="dvb45ms">
                            エンタメ業界に特化した充実のサポート体制
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="8bhw35u">
                        <div className="bg-white p-8 rounded-lg shadow-sm" data-oid="o-s.1.q">
                            <div className="text-blue-600 text-4xl mb-4" data-oid="mat5mgn">
                                🎬
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4" data-oid="zl.gvy9">
                                業界特化型マッチング
                            </h4>
                            <p className="text-gray-600" data-oid="8ulenq3">
                                映画、音楽、ゲーム、アニメなど、各分野に精通したキャリアアドバイザーが最適な企業をご紹介します。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm" data-oid="8e9kbzi">
                            <div className="text-blue-600 text-4xl mb-4" data-oid="dru3qk.">
                                🎯
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4" data-oid="tc.9src">
                                ポートフォリオ作成支援
                            </h4>
                            <p className="text-gray-600" data-oid="obo-ngm">
                                クリエイティブ職に必須のポートフォリオ作成を、業界のプロフェッショナルがサポートします。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm" data-oid="v5sq25n">
                            <div className="text-blue-600 text-4xl mb-4" data-oid="ey94-j6">
                                🤝
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4" data-oid="sqxe-ga">
                                業界人脈ネットワーク
                            </h4>
                            <p className="text-gray-600" data-oid="7cmadim">
                                現役のクリエイターやプロデューサーとの交流機会を提供し、リアルな業界情報をお届けします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section id="companies" className="py-20 bg-white" data-oid=":z22t.a">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6hvwbb8">
                    <div className="text-center mb-16" data-oid="jenl.tb">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" data-oid="awx-hpi">
                            参加企業
                        </h3>
                        <p className="text-lg text-gray-600" data-oid="0q-wgw4">
                            業界をリードする企業が参加しています
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-oid="80.x-gc">
                        {[
                            '映画制作会社',
                            'ゲーム開発',
                            '音楽レーベル',
                            'アニメスタジオ',
                            'VR/AR企業',
                            'ストリーミング',
                            'エージェンシー',
                            'テック企業',
                        ].map((company, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-6 rounded-lg text-center"
                                data-oid="o1woj7n"
                            >
                                <div className="text-2xl mb-2" data-oid="bhs5_fn">
                                    🏢
                                </div>
                                <p className="text-gray-700 font-medium" data-oid="6:_q25y">
                                    {company}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50" data-oid="afekq6j">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="oc-1ejo">
                    <div className="text-center mb-16" data-oid="nbekwmh">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" data-oid="hmpys_-">
                            お問い合わせ
                        </h3>
                        <p className="text-lg text-gray-600" data-oid="52licb2">
                            ご質問やご相談がございましたら、お気軽にお問い合わせください
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto" data-oid="spe0u4g">
                        <form className="space-y-6" data-oid="5bbnk41">
                            <div className="grid md:grid-cols-2 gap-6" data-oid="1eg02j-">
                                <div data-oid="ehgtdpg">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="e.:ilqh"
                                    >
                                        お名前
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        data-oid="huws5zy"
                                    />
                                </div>
                                <div data-oid="x24cfoj">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="b33:81s"
                                    >
                                        メールアドレス
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        data-oid="kyn_gvp"
                                    />
                                </div>
                            </div>
                            <div data-oid="3tcyvwo">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="5k5ruv0"
                                >
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    data-oid="vslh678"
                                ></textarea>
                            </div>
                            <div className="text-center" data-oid="j7au2h1">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    data-oid="4pntx:e"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12" data-oid="zkwg0wm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="zrxhx81">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="we1q98-">
                        <div data-oid="5_fz6-a">
                            <h4 className="text-xl font-bold mb-4" data-oid=":95l5du">
                                エンタメ就活.com
                            </h4>
                            <p className="text-gray-400" data-oid="6jl4q.r">
                                エンターテインメント業界への就職を支援する専門プラットフォーム
                            </p>
                        </div>
                        <div data-oid="zkvmxt8">
                            <h5 className="font-semibold mb-4" data-oid="b81hbc8">
                                サービス
                            </h5>
                            <ul className="space-y-2 text-gray-400" data-oid="o:3v1o5">
                                <li data-oid="vh7.igc">
                                    <a href="#" className="hover:text-white" data-oid="pjat0qs">
                                        求人検索
                                    </a>
                                </li>
                                <li data-oid="qs_5v._">
                                    <a href="#" className="hover:text-white" data-oid="mzz4l1w">
                                        キャリア相談
                                    </a>
                                </li>
                                <li data-oid="cz6tzec">
                                    <a href="#" className="hover:text-white" data-oid="_9veg_s">
                                        ポートフォリオ作成
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="gshxgfz">
                            <h5 className="font-semibold mb-4" data-oid="bb87m08">
                                業界情報
                            </h5>
                            <ul className="space-y-2 text-gray-400" data-oid="y:vqnel">
                                <li data-oid="t-dbhzi">
                                    <a href="#" className="hover:text-white" data-oid="glt_9tt">
                                        映画業界
                                    </a>
                                </li>
                                <li data-oid="h43pmwq">
                                    <a href="#" className="hover:text-white" data-oid="-8vi731">
                                        ゲーム業界
                                    </a>
                                </li>
                                <li data-oid="3pug1um">
                                    <a href="#" className="hover:text-white" data-oid="3vl4vrt">
                                        音楽業界
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="ku1pex-">
                            <h5 className="font-semibold mb-4" data-oid="9r2dd67">
                                サポート
                            </h5>
                            <ul className="space-y-2 text-gray-400" data-oid="_z2djv1">
                                <li data-oid="hzah1np">
                                    <a href="#" className="hover:text-white" data-oid="62y.k4.">
                                        よくある質問
                                    </a>
                                </li>
                                <li data-oid="8zi_qt:">
                                    <a href="#" className="hover:text-white" data-oid="rj8phw2">
                                        利用規約
                                    </a>
                                </li>
                                <li data-oid="k0v2k_5">
                                    <a href="#" className="hover:text-white" data-oid="8ut.0mx">
                                        プライバシーポリシー
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
                        data-oid="2e.:77m"
                    >
                        <p data-oid=":22o3ec">&copy; 2024 エンタメ就活.com All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
