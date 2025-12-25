import React from 'react';
import pdfFile from '../../assets/Resume_Vanz_Lorenzo.pdf';
import { PDFContainer } from './index.styled.js';
const PDFViewer = () => {
	return (
		<PDFContainer>
			<iframe title="PDF Viewer" src={pdfFile} width={'100%'} height={'100%'} />
		</PDFContainer>
	);
};
export default PDFViewer;
