import styles from '../styles/Home.module.css';
import {useEffect} from 'react'
const pathStyle =  {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  stroke: 'rgb(255,255,255)'
}
export default function Svg(){
  return (<svg className={styles.illustration} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs></defs>
  <path style={pathStyle} d="M 224.267 78.636 L 253.62 61.159 L 280.301 77.196"></path>
  <path style={pathStyle} d="M 214.134 83.447 L 240.71 91.369 L 242.251 83.447 L 253.446 76.412 C 253.446 76.412 264.74 83.078 264.74 83.262 C 264.74 83.447 265.646 91.354 265.646 91.354 L 287.989 82.536"></path>
  <path style={pathStyle} d="M 228.626 66.565 L 200.519 86.288 L 245.238 99.856 L 253.459 109.452 L 262.827 100.008 L 303.177 86.437 L 279.728 65.828"></path>
  <path style={pathStyle} d="M 207.998 94.945 L 199.466 112.698 L 231.207 130.313 L 241.874 185.708 L 264.276 185.982 L 273.572 129.952 L 307.33 112.188 L 295.227 95.361"></path>
  <path style={pathStyle} d="M 220.945 103.147 L 241.443 109.666 L 240.083 121.368 L 219.333 108.785 L 220.945 103.147 Z"></path>
  <path style={pathStyle} d="M 265.572 110.636 L 285.589 102.198 L 288.068 107.481 C 288.068 107.481 267.215 122.253 267.14 122.327 C 267.067 122.401 265.874 111.15 265.572 110.636 Z"></path>
  <path style={pathStyle} d="M 244.038 149.424 L 241.184 135.615 L 264.605 135.602 L 261.36 149.717"></path>
  <path style={pathStyle} d="M 234.273 174.12 L 218.946 164.048 L 214.578 137.041 L 219.056 128.799 L 214.662 137.045 L 215.451 143.317 L 228.839 150.631 L 234.273 174.12 Z"></path>
  <path style={pathStyle} d="M 288.06 126.845 L 293.469 135.608 C 293.469 135.608 286.746 164.457 286.672 164.533 C 286.598 164.606 271.378 174.336 271.378 174.336 L 275.876 151.243 C 275.876 151.243 291.644 143.465 291.718 143.539 C 291.792 143.612 293.427 135.33 293.354 135.479 C 293.279 135.627 288.458 127.241 288.06 126.845 Z"></path>
  <path style={pathStyle} d="M 253.053 179.634 L 252.998 157.173"></path>
  <path style={pathStyle} d="M 245.312 162.211 L 245.636 174.089"></path>
  <path style={pathStyle} d="M 260.783 161.889 L 260.531 174.266"></path>
  <path style={pathStyle} d="M 253.4 417.145 L 255.534 343.451"></path>
  <path style={pathStyle} d="M 200.776 416.487 L 221.41 397.011 L 222.673 343.778"></path>
  <path style={pathStyle} d="M 286.763 343.166 L 286.125 397.981 C 286.125 397.981 308.065 418.111 308.269 418.111"></path>
  <path style={pathStyle} d="M 199.05 372.215 L 198.809 285.507 L 148.863 220.278 L 177.12 186.433 L 144.322 161.127 L 114.741 176.138"></path>
  <path style={pathStyle} d="M 309.956 376.689 L 310.294 284.23 L 358.432 225.822 L 319.325 177.834 C 319.325 177.834 354.411 159.549 354.005 159.764 C 353.598 159.978 383.694 182.256 383.694 182.256"></path>
  <path style={pathStyle} d="M 235.216 329.508 C 235.216 329.508 272.847 329.383 273.05 329.383 C 273.254 329.383 288.694 296.365 289.1 296.365 C 289.507 296.365 269.526 264.99 269.324 264.56 C 269.121 264.133 236.795 264.646 236.795 264.646 C 236.795 264.646 215.399 296.416 216.416 296.416 C 217.434 296.416 234.136 328.111 235.216 329.508 Z"></path>
  <path style={pathStyle} d="M 191.579 201.096 L 169.244 222.344 C 169.244 222.344 212.727 271.376 212.523 271.162 C 212.32 270.95 233.323 245.194 233.323 245.194 L 272.77 245.198 C 272.77 245.198 293.624 271.221 293.827 271.221 C 294.031 271.221 335.576 223.107 335.983 222.466 C 336.39 221.825 315.894 198.698 315.894 198.698"></path>
  <path style={pathStyle} d="M 218.572 244.138 L 196.669 220.392 L 216.643 201.466 L 225.076 212.472 L 285.369 211.646 L 293.275 200.769 C 293.275 200.769 310.642 217.73 309.829 217.944 C 309.015 218.157 286.423 242.913 286.423 242.913"></path>
  <path style={pathStyle} d="M 225.008 232.651 L 231.885 221.544 C 231.885 221.544 276.254 221.015 276.66 221.015 C 277.067 221.015 281.743 231.077 281.743 231.077"></path>
  <path style={pathStyle} d="M 227.271 186.732 L 235.058 201.351 C 235.058 201.351 273.197 201.409 273.402 201.409 C 273.604 201.409 279.584 185.393 279.584 185.393"></path>
  <path style={pathStyle} d="M 149.488 220.861 L 165.774 243.52 L 132.313 321.101 L 122.349 308.673 L 149.488 220.861 Z"></path>
  <path style={pathStyle} d="M 136.598 363.554 L 137.902 332.065 L 121.19 309.938 L 108.956 166.209 L 87.066 165.578"></path>
  <path style={pathStyle} d="M 94.759 222.94 L 105.582 320.404 L 120.729 337.198 L 120.096 378.063 L 80.955 339.779 L 51.708 132.476 L 72.628 163.582"></path>
  <path style={pathStyle} d="M 358.468 227.769 L 383.266 313.484 L 374.153 325.032 L 342.292 248.937 L 358.468 227.769 Z"></path>
  <path style={pathStyle} d="M 370.283 360.065 L 369.599 331.484 L 384.142 312.862 L 390.303 165.392 L 411.655 165.809"></path>
  <path style={pathStyle} d="M 409.56 212.099 L 403.526 329.701 L 386.877 346.018 L 387.148 381.515 L 430.068 334.383 L 442.447 127.575 L 426.247 162.133"></path>
  <path style={pathStyle} d="M 56.541 204.562 L 47.124 210.789 L 59.588 226.108"></path>
  <path style={pathStyle} d="M 442.405 212.618 C 442.405 212.618 450.547 219.857 450.343 219.857 C 450.141 219.857 440.817 231.626 440.817 231.626"></path>
  <path style={pathStyle} d="M 117.297 207.395 L 133.877 200.89 L 143.487 213.672"></path>
  <path style={pathStyle} d="M 382.918 211.792 L 365.566 206.777 L 361.038 218.601"></path>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="130.045" cy="99.451" rx="31.872" ry="34.476"></ellipse>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="357.581" cy="97.169" rx="32.066" ry="33.364"></ellipse>
  <path style={pathStyle} d="M 120.943 121.616 L 129.371 128.356 L 151.5 112.016 L 151.957 85.784 L 130.121 70.654 C 130.121 70.654 106.679 84.383 106.843 84.383 C 107.005 84.383 106.191 109.529 106.191 109.529 C 106.087 109.674 112.472 115.583 114.273 116.443 C 118.092 116.601 120.468 110.988 121.288 107.513 C 121.786 105.958 121.727 87.258 121.593 86.93"></path>
  <path style={pathStyle} d="M 143.126 91.626 C 142.715 85.919 132.673 85.342 130.932 88.248 C 129.193 91.153 128.128 97.514 130.462 99.118 C 132.349 100.415 139.648 97.407 142.4 99.572 C 144.84 101.489 143.643 107.166 141.735 110.238 C 139.825 113.31 128.001 113.681 129.525 106.824"></path>
  <path style={pathStyle} d="M 378.947 122.036 L 345.106 83.693 L 345.205 109.78"></path>
  <path style={pathStyle} d="M 367.305 100.965 L 367.158 83.532"></path>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="252.761" cy="296.048" rx="28.438" ry="7.919"></ellipse>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="253.376" cy="286.057" rx="29.729" ry="7.77" transform="matrix(0.484047, 0.875042, -0.883692, 0.46841, 383.838848, -58.635929)"></ellipse>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="254.491" cy="286.034" rx="29.583" ry="7.892" transform="matrix(0.472671, -0.881239, 0.860419, 0.511487, -114.488662, 373.896322)"></ellipse>
  <ellipse style={pathStyle} strokeWidth="5" stroke="rgb(18, 31, 51)" cx="252.442" cy="295.776" rx="4.799" ry="4.989"></ellipse>
  <path style={pathStyle} d="M 92.087 158.311 L 94.977 147.033 L 105.452 146.06 L 119.536 153.286 L 138.011 150.501"></path>
  <path style={pathStyle} d="M 70.863 141.291 L 64.147 134.014 L 55.148 116.054 L 61.515 95.109"></path>
  <path style={pathStyle} d="M 75.452 134.168 L 75.434 133.611 L 68.733 123.881 L 64.516 112.723 L 69.842 88.682"></path>
  <path style={pathStyle} d="M 81.24 84.852 L 74.517 110.623 L 81.954 125.769 L 85.476 131.441 L 85.213 130.973"></path>
  <path style={pathStyle} d="M 87.154 94.29 L 83.335 109.827 C 83.335 109.827 93.777 130.269 93.881 130.269 C 93.985 130.269 93.763 129.972 93.763 129.972"></path>
  <path style={pathStyle} d="M 80.551 157.926 L 75.687 147.094 L 83.234 138.873 L 95.017 137.304 L 103.428 137.571 L 118.553 145.735"></path>
  <path style={pathStyle} d="M 402.773 157.125 L 395.985 141.256 L 382.779 143.743 L 370.145 150.663 L 350.906 146.427"></path>
  <path style={pathStyle} d="M 371.084 140.902 L 383.667 135.294 L 395.031 128.956 L 411.234 127.362 L 426.284 136.109 L 416.212 156.024"></path>
  <path style={pathStyle} d="M 394.92 121.236 L 405.375 97.24 L 396.514 78.238"></path>
  <path style={pathStyle} d="M 404.239 68.773 L 416.828 99.965 C 416.828 99.965 405.326 120.187 405.188 120.187"></path>
  <path style={pathStyle} d="M 415.05 121.016 L 422.949 111.094 L 425.908 99.688 L 415.995 72.25"></path>
  <path style={pathStyle} d="M 425.277 124.646 L 432.989 114.254 L 434.105 97.89 L 427.295 81.467"></path>
</svg>);
}