import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PurchaseComplete () {
    return (
        <div style={{ textAlign: 'center', marginTop: '30vh' }}>
            <div style={{ marginBottom: 30 }}>
                <h1>Purchase Complete</h1>
            </div>
            <div>
                <Link to='/'>
                    <Button color='secondary' variant="contained">
                        Return home
                    </Button>
                </Link>
            </div>
        </div>
    )
}