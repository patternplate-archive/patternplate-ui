/* import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';

export default function PatternView () {
	return (
		<div>
			<StyledContent navigationEnabled={props.navigationEnabled}>
				<StyledMessageBox>
					<Message />
				</StyledMessageBox>
				{props.children}
				{props.searchEnabled &&
					<ThemeProvider theme={props.themes.dark}>
						<StyledSearchBox>
							<StyledSearchFrame>
								<Search />
							</StyledSearchFrame>
						</StyledSearchBox>
					</ThemeProvider>
				}
				<ThemeProvider theme={props.themes.dark}>
					<StyledFloatingBox>
						{props.infoEnabled &&
							<StyledInfoPane>
								<InfoPane hermit={!(props.codeEnabled || props.docEnabled)}>
									<ToggleSource />
									<ToggleDoc />
								</InfoPane>
							</StyledInfoPane>
						}
						{props.infoEnabled && (props.codeEnabled || props.docEnabled) &&
							<StyledPane hermit={!props.infoEnabled} infoEnabled={props.infoEnabled}>
								{(props.codeEnabled && !props.docEnabled) &&
									<CodePane hermit={!props.infoEnabled} />
								}
								{props.docEnabled &&
									<DocPane hermit={!props.infoEnabled} />
								}
							</StyledPane>
						}
					</StyledFloatingBox>
				</ThemeProvider>
			</StyledContent>
			<ThemeProvider theme={props.themes.dark}>
				<StyledControlsBox enabled={props.navigationEnabled}>
					<StyledControlsArea orient="left">
						<StyledControlsItem>
							<ToggleNavigation />
						</StyledControlsItem>
						<StyledControlsItem>
							<ToggleInfoPane />
						</StyledControlsItem>
					</StyledControlsArea>
					<StyledControlsArea orient="right">
						<StyledControlsItem>
							<ToggleOpacity />
						</StyledControlsItem>
						<StyledControlsItem>
							<Fullscreen />
						</StyledControlsItem>
					</StyledControlsArea>
				</StyledControlsBox>
			</ThemeProvider>
		</div>
	);
}

const StyledMessageBox = styled.div`
	position: absolute;
	box-sizing: border-box;
	z-index: 2;
	padding: 15px;
	width: 100%;
`;

const StyledControlsArea = styled.div`
	display: flex;
	${ORIENTATION};
`;

const StyledControlsBox = styled.div`
	display: flex;
	align-items: center;
	flex: 0 0 ${TOOLBAR_HEIGHT}px;
	position: relative;
	z-index: 2;
	box-sizing: border-box;
	height: ${TOOLBAR_HEIGHT}px;
	padding: 0 15px;
`;

const StyledControlsItem = styled.div`
	& + & {
		padding-left: 10px;
	}
`;

const StyledContent = styled.div`
	flex: 1 1 100%;
	width: 100%;
	height: calc(100% - 60px);
	position: relative;
`;

const StyledSearchBox = styled.div`
	position: absolute;
	top: 12.5vh;
	bottom: 10vh;
	right: 0;
	left: 0;
	width: 100%;
	pointer-events: none;
`;

const StyledSearchFrame = styled.div`
	width: 90%;
	min-width: 320px;
	max-width: 750px;
	max-height: 100%;
	margin: 0 auto;
	overflow: hidden;
`;

const StyledFloatingBox = styled.div`
	position: absolute;
	pointer-events: none;
	z-index: 2;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 10px 15px;
	height: 300px;
	display: flex;
`;

const StyledInfoPane = styled.div`
	flex: 0 0 auto;
	box-sizing: border-box;
	pointer-events: all;
`;

const StyledPane = styled.div`
	flex: 1 1 auto;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	overflow: hidden;
	pointer-events: all;
`;
*/
