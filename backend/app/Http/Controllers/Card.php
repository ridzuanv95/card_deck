<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Symfony\Component\Console\Output\ConsoleOutput;

class Card extends Controller
{
    public function generateCard(Request $request){
        try {
            $messages = [
                'num_people.required' => 'Input value does not exist',
                'num_people.integer' => 'Number of people must be integer only',
                'num_people.min' => 'Input value is invalid'
            ];

            $validator = Validator::make($request->all(), [
                'num_people' => 'required|integer|min:1',
            ], $messages);

            if ($validator->fails()) return response(['status' => false, 'message' => $validator->errors()->all(), 'data' => null], 400);

            $list_card = [
            'S-A', 'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-X', 'S-J','S-Q', 'S-K',
            'H-A', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-X', 'H-J','H-Q', 'H-K',
            'D-A', 'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-X', 'D-J','D-Q', 'D-K',
            'C-A', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-X', 'C-J','C-Q', 'C-K'];

            $total_people = $request->input('num_people');
            $list_player_card = array();
            $card_per_person = $this->numberPrecision($total_people);

            if($card_per_person > 1){
                $output = new ConsoleOutput();
                $output->writeln('card per person : '. $card_per_person);
                
                for($x = 0; $x < $total_people; $x++){
                    $cards = array_rand($list_card, $card_per_person);
                    $player_card = array();
                    foreach($cards as $card){
                        array_push($player_card, $list_card[$card]);
                        unset($list_card[$card]);
                    }

                    array_push($list_player_card, $player_card);
                }
            }else {
                if($total_people > 52) $total_people = 52;
                for($x = 0; $x < $total_people; $x++){
                    $card = array_rand($list_card, 1);
                    array_push($list_player_card, [$list_card[$card]]);
                    unset($list_card[$card]);
                }
            }

            if(empty($list_card)) $remaining_card = 0;
            else $remaining_card = array_values($list_card);

            return response()->json(['status' => true, 'message' => 'Successfully created list of card', 'list_player_card' => $list_player_card, 'card_per_person' => $card_per_person, 'remaining_card_av' => $remaining_card], 200);
            
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage(), 'data' => null], 500);
        }
    }

    public function numberPrecision($people)
    {
        $decimals = 0;
        $number = 52 / $people;
        $negation = ($number < 0) ? (-1) : 1;
        $coefficient = 10 ** $decimals;
        return $negation * floor((string)(abs($number) * $coefficient)) / $coefficient;
    }
}
