function Index ({...attributes}) {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#my-test-modal">
                Launch Modal
            </button>
            <RRR.Modal.Basic id="my-test-modal">
                Hello World
            </RRR.Modal.Basic>
        </div>
    );
}

export default Index;
