<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Test extends Controller
{
    public function testConnection(Request $request)
    {
        try {
            return response()->json([ 'status' => true, 'result' => 'Success', 'message' => 'Successfully testing connection API'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'Fail',
                'message' => 'Fail to test connection API',
                'Error' => $e
            ], 500);
        }
    }
}
