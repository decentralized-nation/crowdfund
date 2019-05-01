import React, { Component } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
    state = {
        loadingApprove: false,
        loadingFinalize: false
    };

    onApprove = async () => {
        const campaign = Campaign(this.props.address);

        this.setState({ loadingApprove: true });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });
        } catch (err) {

        }

        this.setState({ loadingApprove: false });

        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    onFinalize = async () => {
        const campaign = Campaign(this.props.address);

        this.setState({ loadingFinalize: true });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.finalizeRequest(this.props.id).send({
                from: accounts[0]
            });
        } catch (err) {

        }

        this.setState({ loadingFinalize: false });

        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);

    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount, manager, balance } = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;

        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete && balance >= request.value}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : (
                        <Button
                            color="green"
                            basic
                            onClick={this.onApprove}
                            loading={this.state.loadingApprove}
                        >
                            Approve
                        </Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : ((balance < request.value) ? (<font color="red">Not Enough Funds</font>) : (
                        <Button
                            color="teal"
                            basic
                            onClick={this.onFinalize}
                            loading={this.state.loadingFinalize}
                        >
                            Finalize
                        </Button>
                    ))}
                </Cell>
            </Row>
        )
    }
}

export default RequestRow;