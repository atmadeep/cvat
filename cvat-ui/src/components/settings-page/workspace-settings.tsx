import React from 'react';

import {
    Row,
    Col,
    Checkbox,
    InputNumber,
} from 'antd';

import Text from 'antd/lib/typography/Text';

interface Props {
    autoSave: boolean;
    autoSaveInterval: number;
    aamZoomMargin: number;
    showAllInterpolationTracks: boolean;
    onSwitchAutoSave(enabled: boolean): void;
    onChangeAutoSaveInterval(interval: number): void;
    onChangeAAMZoomMargin(margin: number): void;
    onSwitchShowingInterpolatedTracks(enabled: boolean): void;
}

export default function WorkspaceSettingsComponent(props: Props): JSX.Element {
    const {
        autoSave,
        autoSaveInterval,
        aamZoomMargin,
        showAllInterpolationTracks,
    } = props;

    return (
        <div className='cvat-workspace-settings'>
            <Row type='flex'>
                <Col>
                    <Checkbox
                        className='cvat-text-color cvat-workspace-settings-auto-save'
                        checked={autoSave}
                    >
                        Enable auto save
                    </Checkbox>
                </Col>
            </Row>
            <Row type='flex'>
                <Col className='cvat-workspace-settings-auto-save-interval'>
                    <Text type='secondary'> Auto save every </Text>
                    <InputNumber
                        min={5}
                        max={60}
                        step={1}
                        value={Math.round(autoSaveInterval / (60 * 1000))}
                    />
                    <Text type='secondary'> minutes </Text>
                </Col>
            </Row>
            <Row className='cvat-workspace-settings-show-interpolated'>
                <Col className='cvat-workspace-settings-show-interpolated-checkbox'>
                    <Checkbox
                        className='cvat-text-color'
                        checked={showAllInterpolationTracks}
                    >
                        Show all interpolation tracks
                    </Checkbox>
                </Col>
                <Col>
                    <Text type='secondary'> Show hidden interpolated objects in the side panel </Text>
                </Col>
            </Row>
            <Row className='cvat-workspace-settings-aam-zoom-margin'>
                <Col>
                    <Text className='cvat-text-color'> Attribute annotation mode (AAM) zoom margin </Text>
                    <InputNumber min={0} max={1000} value={aamZoomMargin} />
                </Col>
            </Row>
        </div>
    );
}
