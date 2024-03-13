<script setup>
import { defineProps } from "vue";

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="offcanvas-body d-flex align-items-center">
    <div class="w-100 text-center">
      <div class="fw-medium fs-5 text-muted">
        <p class="mb-5">{{ `Ошибка: ${error.message}` }}</p>
        <div>
          <svg
            width="280"
            height="279"
            viewBox="0 0 280 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M278.339 256.958C285.068 243.642 265.836 177.058 132.488 177.058C36.2375 177.058 -7.93894 231.558 1.82758 259.178"
              fill="url(#paint0_radial_427_129)"
            />
            <mask
              id="mask0_427_129"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="177"
              width="280"
              height="83"
            >
              <path
                d="M278.339 256.958C285.068 243.642 265.836 177.058 132.488 177.058C36.2375 177.058 -7.93894 231.558 1.82758 259.178"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_427_129)">
              <ellipse
                opacity="0.671968"
                cx="111.923"
                cy="214.397"
                rx="7.33353"
                ry="4.07341"
                fill="url(#paint1_linear_427_129)"
              />
              <ellipse
                opacity="0.451707"
                cx="190.202"
                cy="224.189"
                rx="11.5707"
                ry="6.35452"
                fill="url(#paint2_linear_427_129)"
              />
            </g>
            <rect
              x="171.551"
              y="39.5367"
              width="2.14615"
              height="19.3154"
              transform="rotate(13 171.551 39.5367)"
              fill="url(#paint3_linear_427_129)"
            />
            <ellipse
              cx="167.326"
              cy="64.9922"
              rx="25.2173"
              ry="18.2423"
              transform="rotate(13 167.326 64.9922)"
              fill="url(#paint4_linear_427_129)"
            />
            <ellipse
              cx="163.303"
              cy="80.0325"
              rx="67.6038"
              ry="24.1442"
              transform="rotate(13 163.303 80.0325)"
              fill="#E7EAEE"
            />
            <ellipse
              cx="162.82"
              cy="82.1241"
              rx="67.6038"
              ry="24.1442"
              transform="rotate(13 162.82 82.1241)"
              fill="url(#paint5_linear_427_129)"
            />
            <ellipse
              cx="158.878"
              cy="94.4289"
              rx="26.8269"
              ry="9.12115"
              transform="rotate(13 158.878 94.4289)"
              fill="white"
            />
            <circle
              cx="172.839"
              cy="38.7322"
              r="3.21923"
              transform="rotate(13 172.839 38.7322)"
              fill="#D8D8D8"
            />
            <circle
              cx="212.727"
              cy="85.3857"
              r="4.29231"
              transform="rotate(13 212.727 85.3857)"
              fill="#F9FBFF"
            />
            <circle
              cx="150.395"
              cy="64.3881"
              r="4.29231"
              transform="rotate(13 150.395 64.3881)"
              fill="#F9FBFF"
            />
            <circle
              cx="182.809"
              cy="71.8708"
              r="4.29231"
              transform="rotate(13 182.809 71.8708)"
              fill="#F9FBFF"
            />
            <circle
              cx="117.58"
              cy="63.419"
              r="4.29231"
              transform="rotate(13 117.58 63.419)"
              fill="#F9FBFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M184.852 100.974C184.922 100.808 184.977 100.637 185.017 100.462C186.151 95.5535 175.366 88.8726 160.93 85.5397C146.493 82.2068 133.872 83.484 132.739 88.3923C132.698 88.5678 132.673 88.7456 132.662 88.9253L132.618 88.9151L78.8853 193.398L172.987 215.123L184.897 100.985L184.852 100.974Z"
              fill="url(#paint6_linear_427_129)"
            />
            <path
              d="M144.256 164.009C144.256 164.009 143.071 163.903 142.752 164.634C142.433 165.365 144.082 168.342 144.906 169.137C145.729 169.932 147.486 169.206 146.636 167.346C145.785 165.486 144.256 164.009 144.256 164.009Z"
              fill="#2F2F2B"
            />
            <path
              d="M155.379 159.972C155.379 159.972 155.232 158.791 155.951 158.447C156.67 158.103 159.704 159.647 160.527 160.442C161.35 161.237 160.685 163.019 158.797 162.234C156.908 161.449 155.379 159.972 155.379 159.972Z"
              fill="#2F2F2B"
            />
            <path
              d="M150.206 160.194L144.018 163.999C143.816 164.123 143.682 164.333 143.655 164.568C143.59 165.115 144.1 165.551 144.628 165.395C146.375 164.882 149.686 163.867 150.84 163.229C152.436 162.347 150.206 160.194 150.206 160.194Z"
              fill="url(#paint7_linear_427_129)"
            />
            <path
              d="M156.939 152.492L156.135 158.816C156.067 159.348 156.528 159.796 157.058 159.715C157.34 159.672 157.576 159.487 157.682 159.222C158.347 157.557 160.707 151.618 159.995 153.02C159.169 154.646 156.939 152.492 156.939 152.492Z"
              fill="url(#paint8_linear_427_129)"
            />
            <path
              d="M141.256 151.196C141.256 151.196 141.98 152.588 142.733 153.315C143.608 154.852 145.073 157.998 147.512 162.329C149.025 165.014 151.56 159.829 150.444 156.957L148.068 150.842L157.672 154C158.686 154.334 159.786 153.826 160.19 152.837C160.629 151.765 160.093 150.521 159.035 150.049C157.327 149.287 154.445 147.915 150.172 145.611C149.427 144.892 148.411 144.515 148.411 144.515L141.256 151.196Z"
              fill="url(#paint9_linear_427_129)"
            />
            <path
              d="M127.867 140.343L128.833 142.802L124.2 143.342L116.128 144.057L113.732 145.321L111.015 144.843L111.08 144.548L113.543 144.423L114.08 143.868C114.08 143.868 113.317 143.067 113.53 142.979C113.743 142.892 114.282 143.297 114.616 143.312C114.95 143.328 115.575 142.808 115.575 142.808L123.58 141.589L127.867 140.343Z"
              fill="#FFE9E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M149.618 128.753L149.627 128.78L144.834 135.474L140.525 135.514L140.525 133.225L143.96 133.658L149.06 127.154L149.07 127.182C149.085 127.019 149.1 126.899 149.1 126.899C149.1 126.899 149.192 126.833 149.34 126.728C149.358 126.437 149.414 126.173 149.414 126.173C149.414 126.173 150.434 125.563 150.709 125.51C150.826 125.487 150.724 125.667 150.568 125.881C150.971 125.612 151.324 125.39 151.419 125.372C151.671 125.323 152.024 125.792 152.024 125.792L152.226 126.829L151.822 127.446L149.618 128.753Z"
              fill="#FFE9E9"
            />
            <path
              d="M137.47 132.409C137.47 132.409 141.01 132.46 141.368 133.228C141.528 133.572 140.648 135.155 140.5 135.637C140.5 135.909 140.67 135.998 141.366 136.694C143.098 138.426 149.243 144.996 149.243 144.996C149.243 144.996 147.338 147.804 146.038 149.371C144.738 150.938 142.056 152.364 142.056 152.364C142.056 152.364 136.331 146.112 133.932 144.519C132.753 143.736 131.409 143.435 130.346 143.331C129.222 143.221 128.131 142.621 127.669 141.59C127.356 140.891 127.724 140.075 128.438 139.801C128.941 139.607 129.481 139.377 129.862 139.154C130.786 138.613 131.204 137.765 131.204 137.765L133.717 135.162C133.717 135.162 134.436 134.574 135.303 133.664C136.17 132.754 137.47 132.409 137.47 132.409Z"
              fill="#FF941A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M131.47 134.001L130.006 135.517L132.236 137.671L133.7 136.155L131.47 134.001ZM134.099 138.297C133.782 137.991 132.236 137.671 132.236 137.671L133.7 136.155C133.7 136.155 134.415 138.603 134.099 138.297Z"
              fill="#FECECD"
            />
            <ellipse
              cx="129.807"
              cy="133.999"
              rx="2.2181"
              ry="3.23247"
              transform="rotate(-46 129.807 133.999)"
              fill="#FFE9E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M128.272 135.588C127.955 135.025 126.973 134.076 127.198 133.78C127.422 133.483 128.121 133.131 128.274 132.251C128.332 131.794 128.436 131.638 128.336 131.542C129.856 130.442 129.804 131.927 131.231 132.026C131.38 132.036 131.488 131.76 131.488 131.76C131.488 131.76 129.548 129.887 129.247 129.853C128.945 129.819 127.735 129.677 127.976 130.423C127.727 130.183 126.958 130.467 126.635 131.182C126.312 131.897 125.915 133.055 126.284 133.667C126.652 134.28 127.518 135.373 128.272 135.588Z"
              fill="#513450"
            />
            <ellipse
              opacity="0.328544"
              cx="140.537"
              cy="188.324"
              rx="18.7788"
              ry="3.75577"
              fill="url(#paint10_linear_427_129)"
            />
            <path
              d="M62.738 159.552C62.738 159.552 69.3706 171.214 71.0288 179.45C71.0288 186.029 66.8834 187.741 62.738 187.741C58.5926 187.741 54.4473 186.029 54.4473 179.45C56.1054 171.988 62.738 159.552 62.738 159.552Z"
              fill="#E5EAEF"
            />
            <path
              d="M62.7374 182.959C62.7374 182.663 62.9776 182.423 63.2739 182.423C63.5702 182.423 63.8104 182.663 63.8104 182.959V198.519H62.7374V182.959Z"
              fill="#CFD6DB"
            />
            <g opacity="0.796852">
              <path
                d="M210.287 156.194C210.287 156.194 215.676 165.65 217.023 172.327C217.023 177.662 213.655 179.049 210.287 179.049C206.919 179.049 203.551 177.662 203.551 172.327C204.898 166.277 210.287 156.194 210.287 156.194Z"
                fill="#E5EAEF"
              />
              <path
                d="M210.288 175.173C210.288 174.933 210.483 174.737 210.724 174.737C210.964 174.737 211.159 174.933 211.159 175.173V187.788H210.288V175.173Z"
                fill="#CFD6DB"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_427_129"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(121.503 205.537) rotate(-90) scale(47.7465 498.664)"
              >
                <stop stop-color="#EBEDF0" stop-opacity="0.24" />
                <stop
                  offset="0.536775"
                  stop-color="#EBEDF0"
                  stop-opacity="0.845525"
                />
                <stop offset="1" stop-color="#E0E4E7" stop-opacity="0.01" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_427_129"
                x1="106.02"
                y1="213.317"
                x2="108.254"
                y2="218.095"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1E7EA" />
                <stop offset="1" stop-color="#D0D6DC" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_427_129"
                x1="180.486"
                y1="223.595"
                x2="184.575"
                y2="232.122"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1E7EA" />
                <stop offset="1" stop-color="#D0D6DC" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_427_129"
                x1="174.44"
                y1="39.5933"
                x2="171.621"
                y2="39.5362"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="1" stop-color="#D9DDE2" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_427_129"
                x1="127.033"
                y1="74.663"
                x2="174.093"
                y2="89.5069"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="1" stop-color="#D9DDE2" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_427_129"
                x1="70.0923"
                y1="125.597"
                x2="139.144"
                y2="47.7878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="1" stop-color="#D9DDE2" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_427_129"
                x1="168.44"
                y1="202.436"
                x2="204.056"
                y2="88.6276"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" stop-opacity="0.2" />
                <stop offset="1" stop-color="#D9DDE2" stop-opacity="0.6" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_427_129"
                x1="152.108"
                y1="162.03"
                x2="148.94"
                y2="158.971"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87AF" />
                <stop offset="1" stop-color="#444F77" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_427_129"
                x1="156.795"
                y1="160.115"
                x2="153.06"
                y2="156.509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87AF" />
                <stop offset="1" stop-color="#444F77" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_427_129"
                x1="161.531"
                y1="152.239"
                x2="150.518"
                y2="141.604"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87AF" />
                <stop offset="1" stop-color="#444F77" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_427_129"
                x1="126.441"
                y1="188.77"
                x2="132.93"
                y2="202.625"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C4CDD1" />
                <stop offset="1" stop-color="#C6CFD3" stop-opacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
