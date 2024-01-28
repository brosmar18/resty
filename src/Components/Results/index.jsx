import React from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import './Results.scss';

const Results = ({ data, requestParams, isLoading }) => {
    return (
        <section className="results" data-testid="results-section">
            {isLoading ? (
                <p data-testid="loading">Loading...</p>
            ) : (
                <>
                    <div className='results__text' data-testid="results-text">
                        {requestParams.method && <p data-testid="method"><span className="results__method-label">Method:</span> {requestParams.method}</p>}
                        {requestParams.url && <p data-testid="url"><span className="results__url-label">URL:</span> {requestParams.url}</p>}
                    </div>
                    <div data-testid="result-data" className="results__json">
                        {data ? (
                            <Editor
                                value={data}
                                mode="view" // Set to 'code', 'form', 'text', 'tree', or 'view'
                                theme="ace/theme/github"
                                history={false}
                                navigationBar={false}
                                statusBar={false}
                                readOnly={true}
                                search={false}
                            />
                        ) : <p className='noData'>No Data</p>}
                    </div>
                </>
            )}
        </section>
    );
}

export default Results;
