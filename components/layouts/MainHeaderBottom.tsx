import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainHeaderBottom() {
  const { pathname } = useRouter();
  return (
    <div className="header-bottom">
      <nav>
        <ul>
          <li className={pathname === "/" ? "active" : ""}>
            <Link href="/" legacyBehavior>
              <a>메인</a>
            </Link>
          </li>
          <li className={pathname === "/event" ? "active" : ""}>
            <Link href="/event?category=라인프렌즈" legacyBehavior>
              <a>기획전</a>
            </Link>
          </li>
          <li className={pathname === "/best" ? "active" : ""}>
            <Link href="/best?category=케이크" legacyBehavior>
              <a>베스트</a>
            </Link>
          </li>
          <li className={pathname === "/mypage" ? "active" : ""}>
            <Link href="/mypage" legacyBehavior>
              <a>마이페이지</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
