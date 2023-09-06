import styles from './page.module.scss';
import { BsSearch } from 'react-icons/bs';

import Image from 'next/image';

const BannerList = () => {
  return <></>;
};

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIconBox}>
        <BsSearch className={styles.searchIcon} />
      </div>
      <div className={styles.searchInputBox}>
        <input
          className={styles.searchInput}
          placeholder="키워드를 적어 검색해보세요."
        />
      </div>
    </div>
  );
};

const RecommendedList = () => {
  return (
    <div className={styles.recommendedContainer}>
      <div>
        <Image
          className={styles.recommendedAirplane}
          src="/image/paper_airplane_only_45deg.png"
          fill={true}
          style={{ objectFit: 'contain' }}
          alt="추천 종이비행기 첫 번째"
        />
      </div>
      <div>
        <Image
          className={styles.recommendedAirplane}
          src="/image/paper_airplane_only_45deg.png"
          fill={true}
          style={{ objectFit: 'contain' }}
          alt="추천 종이비행기 두 번째"
        />
      </div>
      <div>
        <Image
          className={styles.recommendedAirplane}
          src="/image/paper_airplane_only_45deg.png"
          fill={true}
          style={{ objectFit: 'contain' }}
          alt="추천 종이비행기 세 번째"
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.bannerSection}>
          <div>
            <BannerList />
          </div>
          <div>
            <BannerList />
          </div>
        </section>
        <section className={styles.searchingSection}>
          <p className={styles.searchTitle}>
            어떤 <span>캐릭터</span>를 원하세요?
          </p>
          <p className={styles.searchSubTitle}>
            물론, <span>굿즈</span>도요!
          </p>
          <div className={styles.searchBox}>
            <SearchBar />
          </div>
          <div className={styles.boatBox}>
            {/* 배경 이미지 */}
            <div className={styles.boatSizeBox}>
              <Image
                src="/image/paper_boat.png"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="종이배"
              />
              <Image
                src="/image/paper_boat_wave.png"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="수면"
              />
            </div>
            <div className={styles.surface}></div>
          </div>
        </section>
        <section className={styles.recommendedSection}>
          <p>비행기가 날아왔어요.</p>
          <div className={styles.recommendedBox}>
            <RecommendedList />
          </div>
        </section>
        <section className={styles.randomSearchingSection}>
          <p>그리고, 누군가의 이야기</p>
          <div className={styles.backgroundLine}></div>
          <div className={styles.randomAirplaneBox}>
            <Image
              src="/image/paper_airplane_only.png"
              fill={true}
              style={{ objectFit: 'contain' }}
              alt="수면"
            />
          </div>
        </section>
      </main>
    </>
  );
}
