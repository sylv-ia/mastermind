import React from "react";
import Svg, { G, Path, Ellipse, Circle, Text, TSpan } from "react-native-svg"

import Theme from './Theme';

function SvgComponent() {

  const font = Theme.font;

  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 364 698">
      
      <G data-name="Color Buttons">
        <G transform="translate(98 579)" fill="red" stroke={Theme.border}>
          <Ellipse cx={22} cy={21.5} rx={22} ry={21.5} stroke="none" />
          <Ellipse cx={22} cy={21.5} rx={21.5} ry={21} fill="none" />
        </G>
        <G
          data-name="button"
          transform="translate(153 579)"
          fill={Theme.circlesA[1]}
          stroke={Theme.border}
        >
          <Ellipse cx={22.5} cy={21.5} rx={22.5} ry={21.5} stroke="none" />
          <Ellipse cx={22.5} cy={21.5} rx={22} ry={21} fill="none" />
        </G>
        <G
          data-name="button"
          transform="translate(209 579)"
          fill={Theme.circlesA[2]}
          stroke={Theme.border}
        >
          <Circle cx={21.5} cy={21.5} r={21.5} stroke="none" />
          <Circle cx={21.5} cy={21.5} r={21} fill="none" />
        </G>
        <G
          data-name="button"
          transform="translate(98 625)"
          fill={Theme.circlesB[0]}
          stroke={Theme.border}
        >
          <Ellipse cx={22} cy={21.5} rx={22} ry={21.5} stroke="none" />
          <Ellipse cx={22} cy={21.5} rx={21.5} ry={21} fill="none" />
        </G>
        <G data-name="button" fill={Theme.circlesB[1]}>
          <Path d="M175.5 667.5c-2.973 0-5.857-.556-8.57-1.653a22.013 22.013 0 01-6.994-4.506 20.905 20.905 0 01-4.71-6.675 20.051 20.051 0 01-1.726-8.166c0-2.832.58-5.58 1.725-8.166a20.905 20.905 0 014.71-6.675 22.013 22.013 0 016.994-4.506 22.763 22.763 0 018.571-1.653c2.973 0 5.857.556 8.57 1.653a22.013 22.013 0 016.994 4.506 20.905 20.905 0 014.71 6.675 20.051 20.051 0 011.726 8.166c0 2.832-.58 5.58-1.725 8.166a20.905 20.905 0 01-4.71 6.675 22.013 22.013 0 01-6.994 4.506 22.763 22.763 0 01-8.571 1.653z" />
          <Path
            d="M175.5 626c-2.908 0-5.729.544-8.383 1.617a21.515 21.515 0 00-6.836 4.403 20.407 20.407 0 00-4.598 6.516A19.554 19.554 0 00154 646.5c0 2.762.566 5.442 1.683 7.964a20.407 20.407 0 004.598 6.516 21.515 21.515 0 006.836 4.403A22.265 22.265 0 00175.5 667c2.908 0 5.729-.544 8.383-1.617a21.515 21.515 0 006.836-4.403 20.407 20.407 0 004.598-6.516A19.554 19.554 0 00197 646.5c0-2.762-.566-5.442-1.683-7.964a20.407 20.407 0 00-4.598-6.516 21.515 21.515 0 00-6.836-4.403A22.265 22.265 0 00175.5 626m0-1c12.426 0 22.5 9.626 22.5 21.5S187.926 668 175.5 668s-22.5-9.626-22.5-21.5 10.074-21.5 22.5-21.5z"
            fill={Theme.border}
          />
        </G>
        <G data-name="button" fill={Theme.circlesB[2]}>
          <Path d="M230.5 667.5a20.93 20.93 0 01-14.85-6.15 20.93 20.93 0 01-6.15-14.85 20.93 20.93 0 016.15-14.85 20.93 20.93 0 0114.85-6.15 20.93 20.93 0 0114.85 6.15 20.93 20.93 0 016.15 14.85 20.93 20.93 0 01-6.15 14.85 20.93 20.93 0 01-14.85 6.15z" />
          <Path
            d="M230.5 626a20.433 20.433 0 00-14.496 6.004A20.433 20.433 0 00210 646.5a20.433 20.433 0 006.004 14.496A20.433 20.433 0 00230.5 667a20.433 20.433 0 0014.496-6.004A20.433 20.433 0 00251 646.5a20.433 20.433 0 00-6.004-14.496A20.433 20.433 0 00230.5 626m0-1c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z"
            fill={Theme.border}
          />
        </G>
      </G>
      <G
        data-name="Arrow Buttons"
        fill={Theme.button}
        stroke={Theme.border}
      >
        <G data-name="Ellipse 19" transform="translate(134 531)">
          <Ellipse cx={18.5} cy={19} rx={18.5} ry={19} stroke="none" />
          <Ellipse cx={18.5} cy={19} rx={18} ry={18.5} fill="none" />
        </G>
        <G data-name="Ellipse 20" transform="translate(180 531)">
          <Ellipse cx={18.5} cy={19} rx={18.5} ry={19} stroke="none" />
          <Ellipse cx={18.5} cy={19} rx={18} ry={18.5} fill="none" />
        </G>
      </G>
      <G
        data-name="button"
        transform="translate(257 525)"
        fill={Theme.button}
        stroke={Theme.border}
      >
        <Ellipse cx={21.5} cy={22} rx={21.5} ry={22} stroke="none" />
        <Ellipse cx={21.5} cy={22} rx={21} ry={21.5} fill="none" />
      </G>
      <G
        data-name="arrow-right"
        fill="none"
        stroke={Theme.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.707}
      >
        <Path data-name="Line 2" d="M189 550.124h17.248" />
        <Path data-name="Path 3" d="M200.124 544l6.124 6.124-6.124 6.124" />
      </G>
      <G
        data-name="arrow-right"
        fill="none"
        stroke={Theme.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.707}
      >
        <Path data-name="Line 2" d="M162 550.876h-17.248" />
        <Path data-name="Path 3" d="M150.876 557l-6.124-6.124 6.124-6.124" />
      </G>
      <Path
        d="M287.5 541.5l-11 11-5-5"
        fill="none"
        stroke={Theme.check}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.779}
      />
      <G fill={Theme.highlight}>
        <Path d="M326 419.5H38c-5.238 0-9.5-4.262-9.5-9.5v-36c0-5.238 4.262-9.5 9.5-9.5h288c5.238 0 9.5 4.262 9.5 9.5v36c0 5.238-4.262 9.5-9.5 9.5z" />
        <Path
          d="M38 365c-4.963 0-9 4.037-9 9v36c0 4.963 4.037 9 9 9h288c4.963 0 9-4.037 9-9v-36c0-4.963-4.037-9-9-9H38m0-1h288c5.523 0 10 4.477 10 10v36c0 5.523-4.477 10-10 10H38c-5.523 0-10-4.477-10-10v-36c0-5.523 4.477-10 10-10z"
          fill={Theme.border}
        />
      </G>
      <G
        data-name="Ellipse 21"
        transform="translate(109 371)"
        fill={Theme.circlesA[2]}
        stroke={Theme.border}
      >
        <Circle cx={21.5} cy={21.5} r={21.5} stroke="none" />
        <Circle cx={21.5} cy={21.5} r={21} fill="none" />
      </G>
      <G data-name="Path 18" fill="red">
        <Path d="M183.5 413.5a20.93 20.93 0 01-14.85-6.15 20.93 20.93 0 01-6.15-14.85 20.93 20.93 0 016.15-14.85 20.93 20.93 0 0114.85-6.15 20.93 20.93 0 0114.85 6.15 20.93 20.93 0 016.15 14.85 20.93 20.93 0 01-6.15 14.85 20.93 20.93 0 01-14.85 6.15z" />
        <Path
          d="M183.5 372a20.433 20.433 0 00-14.496 6.004A20.433 20.433 0 00163 392.5a20.433 20.433 0 006.004 14.496A20.433 20.433 0 00183.5 413a20.433 20.433 0 0014.496-6.004A20.433 20.433 0 00204 392.5a20.433 20.433 0 00-6.004-14.496A20.433 20.433 0 00183.5 372m0-1c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z"
          fill={Theme.border}
        />
      </G>
      <G data-name="Path 19" fill={Theme.circlesB[1]}>
        <Path d="M236.5 413.5a20.93 20.93 0 01-14.85-6.15 20.93 20.93 0 01-6.15-14.85 20.93 20.93 0 016.15-14.85 20.93 20.93 0 0114.85-6.15 20.93 20.93 0 0114.85 6.15 20.93 20.93 0 016.15 14.85 20.93 20.93 0 01-6.15 14.85 20.93 20.93 0 01-14.85 6.15z" />
        <Path
          d="M236.5 372a20.433 20.433 0 00-14.496 6.004A20.433 20.433 0 00216 392.5a20.433 20.433 0 006.004 14.496A20.433 20.433 0 00236.5 413a20.433 20.433 0 0014.496-6.004A20.433 20.433 0 00257 392.5a20.433 20.433 0 00-6.004-14.496A20.433 20.433 0 00236.5 372m0-1c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z"
          fill={Theme.border}
        />
      </G>
      <G
        data-name="Ellipse 28"
        transform="translate(268 371)"
        fill="red"
        stroke={Theme.border}
      >
        <Circle cx={21.5} cy={21.5} r={21.5} stroke="none" />
        <Circle cx={21.5} cy={21.5} r={21} fill="none" />
      </G>
      <G stroke={Theme.border}>
        <G data-name="Ellipse 29" transform="translate(56 374)" fill={Theme.indicatorDark}>
          <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
          <Circle cx={8.5} cy={8.5} r={8} fill="none" />
        </G>
        <G data-name="Ellipse 30" transform="translate(77 374)" fill={Theme.indicatorDark}>
          <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
          <Circle cx={8.5} cy={8.5} r={8} fill="none" />
        </G>
        <G data-name="Ellipse 31" transform="translate(56 395)" fill={Theme.indicatorDark}>
          <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
          <Circle cx={8.5} cy={8.5} r={8} fill="none" />
        </G>
        <G data-name="Ellipse 32" transform="translate(77 395)" fill={Theme.indicatorDark}>
          <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
          <Circle cx={8.5} cy={8.5} r={8} />
        </G>
      </G>
      <Text
        data-name={2}
        transform="translate(41.5 395)"
        fill={Theme.helpText}
        fontSize={12}
        fontFamily={font}
      >
        <TSpan x={-3.601} y={0}>
          {"2"}
        </TSpan>
      </Text>
      <G data-name="Row">
        <G data-name="Box" fill={Theme.highlight}>
          <Path d="M326 353.5H38c-5.238 0-9.5-4.262-9.5-9.5v-36c0-5.238 4.262-9.5 9.5-9.5h288c5.238 0 9.5 4.262 9.5 9.5v36c0 5.238-4.262 9.5-9.5 9.5z" />
          <Path
            d="M38 299c-4.963 0-9 4.037-9 9v36c0 4.963 4.037 9 9 9h288c4.963 0 9-4.037 9-9v-36c0-4.963-4.037-9-9-9H38m0-1h288c5.523 0 10 4.477 10 10v36c0 5.523-4.477 10-10 10H38c-5.523 0-10-4.477-10-10v-36c0-5.523 4.477-10 10-10z"
            fill={Theme.border}
          />
        </G>
        <G data-name="Cells">
          <G
            data-name="Ellipse 21"
            transform="translate(109 305)"
            fill="red"
            stroke={Theme.border}
          >
            <Circle cx={21.5} cy={21.5} r={21.5} stroke="none" />
            <Circle cx={21.5} cy={21.5} r={21} fill="none" />
          </G>
          <G data-name="Path 18" fill="red">
            <Path d="M183.5 347.5a20.93 20.93 0 01-14.85-6.15 20.93 20.93 0 01-6.15-14.85 20.93 20.93 0 016.15-14.85 20.93 20.93 0 0114.85-6.15 20.93 20.93 0 0114.85 6.15 20.93 20.93 0 016.15 14.85 20.93 20.93 0 01-6.15 14.85 20.93 20.93 0 01-14.85 6.15z" />
            <Path
              d="M183.5 306a20.433 20.433 0 00-14.496 6.004A20.433 20.433 0 00163 326.5a20.433 20.433 0 006.004 14.496A20.433 20.433 0 00183.5 347a20.433 20.433 0 0014.496-6.004A20.433 20.433 0 00204 326.5a20.433 20.433 0 00-6.004-14.496A20.433 20.433 0 00183.5 306m0-1c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z"
              fill={Theme.border}
            />
          </G>
          <G data-name="Path 19" fill={Theme.circlesA[1]}>
            <Path d="M236.5 347.5a20.93 20.93 0 01-14.85-6.15 20.93 20.93 0 01-6.15-14.85 20.93 20.93 0 016.15-14.85 20.93 20.93 0 0114.85-6.15 20.93 20.93 0 0114.85 6.15 20.93 20.93 0 016.15 14.85 20.93 20.93 0 01-6.15 14.85 20.93 20.93 0 01-14.85 6.15z" />
            <Path
              d="M236.5 306a20.433 20.433 0 00-14.496 6.004A20.433 20.433 0 00216 326.5a20.433 20.433 0 006.004 14.496A20.433 20.433 0 00236.5 347a20.433 20.433 0 0014.496-6.004A20.433 20.433 0 00257 326.5a20.433 20.433 0 00-6.004-14.496A20.433 20.433 0 00236.5 306m0-1c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5z"
              fill={Theme.border}
            />
          </G>
          <G
            data-name="Ellipse 28"
            transform="translate(268 305)"
            fill={Theme.circlesA[2]}
            stroke={Theme.border}
          >
            <Circle cx={21.5} cy={21.5} r={21.5} stroke="none" />
            <Circle cx={21.5} cy={21.5} r={21} fill="none" />
          </G>
        </G>
        <G data-name="Indicators" stroke={Theme.border}>
          <G data-name="Ellipse 29" transform="translate(56 308)" fill={Theme.indicatorDark} >
            <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
            <Circle cx={8.5} cy={8.5} r={8} fill="none" />
          </G>
          <G data-name="Ellipse 30" transform="translate(77 308)" fill={Theme.indicatorLight}>
            <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
            <Circle cx={8.5} cy={8.5} r={8} fill="none" />
          </G>
          <G data-name="Ellipse 31" transform="translate(56 329)" fill={Theme.indicatorLight}>
            <Circle cx={8.5} cy={8.5} r={8.5} stroke="none" />
            <Circle cx={8.5} cy={8.5} r={8} fill="none" />
          </G>
          <G data-name="Ellipse 32" transform="translate(77 329)" fill={Theme.indicator}>
            <Circle cx={8.5} cy={8.5} r={4.25} stroke="none" />
            <Circle cx={8.5} cy={8.5} r={4} />
          </G>
        </G>
        <Text
          data-name={1}
          transform="translate(41.5 329)"
          fill={Theme.helpText}
          fontSize={12}
          fontFamily={font}
        >
          <TSpan x={-3.601} y={0}>
            {"1"}
          </TSpan>
        </Text>
      </G>
      <G data-name="Attempts Bar">
        <Path data-name="Rectangle 20" fill={Theme.background} d="M35 59h295v44H35z" />
        <G
          data-name="arrow-right"
          fill="none"
          stroke={Theme.text}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.707}
        >
          <Path data-name="Line 2" d="M60 81.876H44.752" />
          <Path data-name="Path 3" d="M50.876 88l-6.124-6.124 6.124-6.124" />
        </G>
        <Text
          data-name="level 1 attempts left: 1"
          transform="translate(118 68)"
          fill={Theme.helpText}
          fontSize={12}
          fontFamily={font}
        >
          <TSpan x={39.796} y={9}>
            {"level 1"}
          </TSpan>
          <TSpan x={7.391} y={23}>
            {"attempts left: 9"}
          </TSpan>
        </Text>
      </G>
      <G data-name="Confirm info">
        <Text
          data-name="Tap here to confirm your guess"
          transform="translate(309 612)"
          fill={Theme.helpText}
          fontSize={10}
          fontFamily={font}
        >
          <TSpan x={-36.006} y={0}>
            {"Tap here to "}
          </TSpan>
          <TSpan x={-39.006} y={12}>
            {"confirm your "}
          </TSpan>
          <TSpan x={-15.002} y={24}>
            {"guess"}
          </TSpan>
        </Text>
        <G
          data-name="arrow-right"
          fill="none"
          stroke={Theme.helpText}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <Path
            data-name="Line 2"
            d="M307.144 600.693l-12.073-22.73"
            strokeWidth={1.99964}
          />
          <Path
            data-name="Path 3"
            d="M292.173 587.428l2.898-9.464 9.464 2.898"
            strokeWidth={1.99964}
          />
        </G>
      </G>
      <G data-name="Attempts info">
        <Text
          data-name="You have a limited number of tries"
          transform="translate(246 121)"
          fill={Theme.helpText}
          fontSize={10}
          fontFamily={font}
        >
          <TSpan x={28.995} y={8}>
            {"You have a "}
          </TSpan>
          <TSpan x={16.993} y={20}>
            {"limited number "}
          </TSpan>
          <TSpan x={34.996} y={32}>
            {"of tries"}
          </TSpan>
        </Text>
        <G
          data-name="arrow-right"
          fill="none"
          stroke={Theme.helpText}
          strokeLinecap="round"
          strokeWidth={2}
        >
          <Path
            data-name="Path 17"
            d="M263.088 123.325l-20.352-24.27"
            strokeWidth={2.0005}
          />
          <Path
            data-name="Path 3"
            d="M241.87 108.92l.866-9.865 9.864.866"
            strokeLinejoin="round"
            strokeWidth={2.0005}
          />
        </G>
      </G>
      <G data-name="Buttons info">
        <G
          data-name="arrow-right"
          fill="none"
          stroke={Theme.helpText}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <Path
            data-name="Line 2"
            d="M83.205 558.794l19.595 20.271"
            strokeWidth={1.99998}
          />
          <Path
            data-name="Path 3"
            d="M102.968 569.167l-.168 9.898-9.898-.168"
            strokeWidth={1.99998}
          />
        </G>
        <Text
          data-name="Use these buttons to enter your guess"
          transform="translate(0 509)"
          fill={Theme.helpText}
          fontSize={12}
          fontFamily={font}
        >
          <TSpan x={23.095} y={9}>
            {"Use these "}
          </TSpan>
          <TSpan x={19.494} y={23}>
            {"buttons to "}
          </TSpan>
          <TSpan x={19.494} y={37}>
            {"enter your "}
          </TSpan>
          <TSpan x={37.497} y={51}>
            {"guess"}
          </TSpan>
        </Text>
      </G>
      <G stroke={Theme.border} opacity={0.152}>
        <Path stroke="none" d="M8 9h350v689H8z" />
        <Path fill="none" d="M8.5 9.5h349v688H8.5z" />
      </G>
      <Text
        data-name="Crack the secret code!"
        transform="translate(185 33)"
        fill={Theme.helpText}
        fontSize={20}
        fontFamily={font}
      >
        <TSpan x={-132.021} y={0}>
          {"Crack the secret code!"}
        </TSpan>
      </Text>
      <G data-name="Dot Info">
        <Text
          data-name="The black and white dots are hints"
          transform="translate(56 140)"
          fill={Theme.helpText}
          fontSize={16}
          fontFamily={font}
        >
          <TSpan x={2.285} y={12}>
            {"The black and white "}
          </TSpan>
          <TSpan x={26.289} y={31}>
            {"dots are hints"}
          </TSpan>
        </Text>
        <G
          data-name="Group 1"
          fill="none"
          stroke={Theme.helpText}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <G data-name="arrow-right">
            <G data-name="arrow-right">
              <Path data-name="Line 2" d="M162.696 269.444l-61.921 37.206" />
              <Path
                data-name="Path 3"
                d="M110.38 309.045l-9.605-2.395 2.395-9.606"
              />
            </G>
            <G data-name="arrow-right">
              <Path data-name="Line 2" d="M162.696 269.444l-61.921 37.206" />
              <Path
                data-name="Path 3"
                d="M110.38 309.045l-9.605-2.395 2.395-9.606"
              />
            </G>
          </G>
          <G data-name="arrow-right">
            <G data-name="arrow-right">
              <Path data-name="Line 2" d="M76.908 251.923l-9.599 49.38" />
              <Path
                data-name="Path 3"
                d="M75.516 295.767l-8.207 5.536-5.536-8.207"
              />
            </G>
            <G data-name="arrow-right">
              <Path data-name="Line 2" d="M76.908 251.923l-9.599 49.38" />
              <Path
                data-name="Path 3"
                d="M75.516 295.767l-8.207 5.536-5.536-8.207"
              />
            </G>
          </G>
        </G>
        <Text
          data-name="Black dot = correct color and correct position"
          transform="translate(78 214)"
          fill={Theme.helpText}
          fontSize={14}
          fontFamily={font}
        >
          <TSpan x={-46.208} y={0}>
            {"Black dot ="}
          </TSpan>
          <TSpan fill={Theme.helpGreen} fontSize={11}>
            <TSpan x={-59.41} y={14}>
              {"correct color "}
            </TSpan>
            <TSpan y={14} fill={Theme.helpText}>
              {"and "}
            </TSpan>
            <TSpan x={-52.809} y={27}>
              {"correct position"}
            </TSpan>
          </TSpan>
        </Text>
        <Text
          data-name="White dot = correct color and wrong position"
          transform="translate(221 239)"
          fill={Theme.helpText}
          fontSize={14}
          fontFamily={font}
        >
          <TSpan x={-46.208} y={0}>
            {"White dot ="}
          </TSpan>
          <TSpan fill={Theme.helpGreen} fontSize={11}>
            <TSpan x={-56.109} y={14}>
              {"correct color "}
            </TSpan>
            <TSpan y={14} fill={Theme.helpText}>
              {"and"}
            </TSpan>
          </TSpan>
          <TSpan fill={Theme.helpRed} fontSize={11}>
            <TSpan x={-46.208} y={27}>
              {"wrong position"}
            </TSpan>
          </TSpan>
        </Text>
        <Text
          data-name="4 black dots = win!"
          transform="translate(210 464)"
          fill={Theme.helpText}
          fontSize={16}
          fontFamily={font}
        >
          <TSpan x={-91.215} y={0}>
            {"4 black dots = "}
          </TSpan>
          <TSpan y={0} fill={Theme.helpGreen}>
            {"win!"}
          </TSpan>
        </Text>
        <G
          data-name="arrow-right"
          fill="none"
          stroke={Theme.helpText}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <Path
            data-name="Line 2"
            d="M111.878 450.605l-22.692-33.63"
            strokeWidth={2.00048}
          />
          <Path
            data-name="Path 3"
            d="M87.299 426.695l1.887-9.72 9.72 1.888"
            strokeWidth={2.00048}
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
