<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  name: "KUNGalgameTopBar",
  components: {
    Icon,
  },
  setup() {
    let topBarItem: string[] = ["回到主页", "帖子发布", "技术交流", "关于我们"];
    return {
      topBarItem,
    };
  },
};
</script>

<template>
  <div class="header">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <a href="#"><img src="../assets/images/favicon.png" alt="KUNgal" /></a>
        <a href="#"><span>KUNGalgame</span></a>
      </div>
      <div class="top-bar">
        <ul>
          <li v-for="(kun, index) in topBarItem" :key="index">{{ kun }}</li>
          <div class="top-bar-box"></div>
        </ul>
      </div>
    </div>

    <!-- TODO: 顶部全局搜索框 -->
    <!--     <div class="top-search-bar">
      <Icon icon="line-md:search" :rotate="3" />
    </div> -->
    <!-- 用户个人信息 -->
    <div class="kungalgamer-info">
      <a href="#"><img src="../assets/images/KUN.jpg" alt="KUN" /></a>
      <span>KUN</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
	height: 58px;
	box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
	backdrop-filter: blur(5px);
	background-color: var(--kungalgame-trans-white-5);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 50px;
}
.nav-top {
	display: flex;
	align-items: center;
}
.kungal-info {
	display: flex;
	align-items: center;
	img {
		height: 50px;
		margin-left: 50px;
		cursor: pointer;
	}
	span {
		margin-left: 20px;
		margin-right: 7px;
		color: var(--kungalgame-font-color-3);
		font-weight: bold;
		cursor: pointer;
	}
}
.top-bar {
	width: 400px;
	position: relative;
	text-align: center;
	ul {
		display: flex;
		align-items: center;
		right: 5%;
		.top-bar-box {
			position: absolute;
			bottom: 0;
			left: 0;
			width: calc((100% / 4) * 1);
			height: 7px;
			border-radius: 2px;
			transition: 0.5s;
		}
		li {
			width: 100%;
			color: var(--kungalgame-blue-5);
			font-weight: bold;
			display: block;
			width: 100%;
			line-height: 58px;
			cursor: pointer;
			&:hover {
				background-color: var(--kungalgame-blue-0);
				transition: 0.5s;
				border-radius: 2px;
			}
			&:nth-child(1) {
				&:hover {
					&~.top-bar-box {
						left: calc(100% / 4 * 0);
						background-color: var(--kungalgame-red-3);
					}
				}
			}
			&:nth-child(2) {
				&:hover {
					&~.top-bar-box {
						left: calc(100% / 4 * 1);
						background-color: var(--kungalgame-yellow-3);
					}
				}
			}
			&:nth-child(3) {
				&:hover {
					&~.top-bar-box {
						left: calc(100% / 4 * 2);
						background-color: var(--kungalgame-blue-3);
					}
				}
			}
			&:nth-child(4) {
				&:hover {
					&~.top-bar-box {
						left: calc(100% / 4 * 3);
						background-color: var(--kungalgame-green-3);
					}
				}
			}
		}
	}
}
.kungalgamer-info {
	display: flex;
	align-items: center;
	img {
		border-radius: 50%;
		height: 40px;
	}
	span {
		color: var(--kungalgame-font-color-2);
		margin-left: 20px;
	}
}
</style>
