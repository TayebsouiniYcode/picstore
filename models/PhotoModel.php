<?php

namespace app\models;
use app\core\DbModel;

class PhotoModel extends DbModel
{
    public int $id;
    public string $name = '';
    

    public function tableName(): string
    {
        return 'photos';
    }


    public function selectAll()
    {
        return parent::selectAll();
    }

    // public function findOne($where)
    // {
    //     return parent::findOne($where);
    // }

    // public function delete($id)
    // {
    //     return parent::delete($id);
    // }

    // public function select($id)
    // {
    //     return parent::select($id);
    // }
    
    // public function count()
    // {
    //     return parent::count();
    // }    

    public function save()
    {
        return parent::save();
    }

    public function rules(): array
    {
        return [];
    }

    public function attributes(): array
    {
        return [
            'name',
        ];
    }
}